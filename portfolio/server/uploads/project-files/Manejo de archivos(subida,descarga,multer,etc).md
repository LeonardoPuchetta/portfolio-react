

# **Manejo de archivos(subida,descarga,multer,etc)**

## **Subida de archivos/imagenes al servidor  con multer**



- Multer es un "middleware" de node.js para el manejo de multipart/form-data, el cuál es usado sobre todo para la **subida** de archivos. Está escrito sobre busboy para maximizar su eficiencia.

- NOTA: Multer no procesará ningún formulario basado en multipart/form-data.

- Instalamos multer en el server :
~~~
npm i multer
~~~
## Configuracion de multer

- En **server -> config -> *multer.js**
 donde vamos a configurar el multer 
~~~

const multer = require('multer');
//path para unir directorios 
const path = require('path');

//uso de diskStorage
const storage = multer.diskStorage({
    //destino del archivo valiendose de path
    destination : function(request,file,callback){
        callback(null,path.join(__dirname,'../uploads/project-files'))
    },
    //le damos nombre al archivo
    filename: function(request,file,callback){
    const realName = file.originalname;
    callback(null,realName)
    }
})

module.exports = storage;
~~~

en la constante **storage** configuramos el **destino** del archivo a guardar y el **nombre** con el que se guardara , este coincidira con **file.originalname**

## Modelo de archivo a guardar 

- Creamos un modelo de archivo a subir, en  **server -> models -> *projectFile.js** :

~~~
const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const FileProjectSchema = Schema({
    fileName : {
        type : String,
        required: true,
        unique: true
    },
    urlFile : {
        type : String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('FileProject',FileProjectSchema);
~~~
- En la base de datos de mongo tendremos un registro de archivos guardados y  que archivo corresponde con que proyecto . 

- Le damos valores unicos a los campos de name y url para no repetir el registro de archivos guardados en la base de datos . 

- **Vamos a trabajar este modelo individualmente y luego estableceremos una relacion entre los archivos en uploads y cada proyecto individual**.

- Es decir todos los archivos iran a una carpeta unica llamada **project-files**

## Creacion del controlador de archivos (y funcion de guardado)
- En En **server -> controllers -> *projectFile.js**

- Creamos un **controlador** fileProject con las funciones de manejo de archivos.Comenzamos con la funcion de guardar un archivo .

~~~
const FileProject = require('./../models/fileProject');

function  uploadFile(request,response){

    //extraemos el archivo y el body de la request
    const {body,file} = request;

    //console.log(file);

  

    if (file && body){

        const name = file.filename;

        const newFile = new FileProject({
            fileName : `${name}`,
            urlFile : `./../uploads/project-files/${name}`

        });

        newFile.save((error,fileStored)=>{
            if (error){
                response.status(500).send({message : 'Error en el servidor'})
            } else {
                if(!fileStored){
                    response.status(404).send({message:'Error al guardar archivo'})
                } else {
                    response.status(200).send({newFile:fileStored})
                }
            }
        })

    }
}

module.exports = {
    uploadFile
}
~~~

## Rutas 

- En En **server -> routes -> *projectFile.js**

~~~
const express = require('express');
const FileProjectController = require('./../controllers/fileProject');


const multer = require('multer');

const storage = require('./../config/multer');
const uploader = multer ({storage});

//variable para generar rutas 
const api = express.Router();

api.post('/upload-file',uploader.single('file'),FileProjectController.uploadFile);


module.exports = api;
~~~

- Donde hemos traido **multer** , la constante de configuracion **storage** y hemos creado el middleware **uploader** para aplicarlo a la ruta junto con las funciones del controlador . 

- En **app.js** del server :

~~~
const fileProjectRoutes = require('./routes/fileProject');

app.use(`/api/${API_VERSION}`,fileProjectRoutes);
~~~

## Api en el cliente 

- Creamos la api en fileProject.js :

~~~
//funciones para conectar con los endpoints de fileProject
import {basePath,apiVersion}from './config';

export function uploadFileApi(file){

    const url = `${basePath}/${apiVersion}/upload-file`;

    const formData = new FormData() ;
    formData.append("file",file);


    const params ={
        method: 'POST',
        body: formData,
      
    };

    return fetch(url,params)
            .then(response => {
                return response.json()
            }).then(result => {
                return result
            }).catch(err =>{
                return err
            })


}

~~~


## **Cargando imagenes de skills alojadas en el cliente**

 ### Ejemplo :

- <a href='https://www.youtube.com/watch?v=bVf3DqkiPw8'>https://www.youtube.com/watch?v=bVf3DqkiPw8</a>

- Las imagenes van alojadas en **client -> assets** y estan en formato **.svg**.

- Los componentes skill contienen una imagen y un titulo y se renderizan en una SkillsList dentro del componente Proyecto .

- Nos valemos de **require.context()** para acceder al directorio de skill-images sin tener que importar cada imagen **en el componente skill** :

~~~
import React from 'react';
import './Skill.scss';

const imgPath = require.context('./../../assets/skills-images',true);

export default function Skill(props) {

  const {name} = props;

  const skillName= name.toLowerCase();

  return (
    <>
    <div className='skill-image'>

    <img src={imgPath(`./${skillName}.svg`)} alt={skillName} type="img/svg"></img>  

    </div>
    <span>{skillName}</span>
    
    </>
  )
}
~~~

- En caso de que tengamos otras extensiones tendremos que ingeniarnos para construir una url apropiada para cada renderizado . 

----------------------------------------------------------

## **Visualizar imagenes / obtener archivos alojados en el server**

- ### Ejemplo : tenemos archivos alojados en **uploads/carpeta** del server y queremos visualizarlos o descargarlos desde el client 

- **(1)** - Creamos un metodo en el controlador fileProject del server , para ello nos valemos de **path** para la construccion de rutas y de **fs** para la lectura de archivos 


~~~
const fs = require('fs');
const path = require('path');

//funcion para retornar imagenes al recibir por params el nombre de la misma 
function getImage (request,response){

    const {name} = request.params;
    
    const filePath = "./../uploads/project-images/" + name ; 

    //generamos una ruta absoluta 
    const pathImage = path.join(__dirname,filePath);

    console.log(pathImage);

    //comprobamos si la imagen existe y en caso que podamos leeerla la retornamos 
    if(fs.existsSync(pathImage)){
        fs.readFile(pathImage,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathImage))
            }
        })
    } else {
        response.status(404).send({message:"Imagen no encontrada"});
    }

}
~~~

- **(2)** En routes : 
~~~
api.get('/get-image/:name',FileProjectController.getImage);
~~~

- **(3)** En el api del client : 

--------------------------------------------------------------

## **Descargar archivos desde el server**

- Tenemos el metodo en el controlador fileProject getFile() :

~~~
function getFile(request,response){

    const {name} = request.params;
    
    const filePath = "./../uploads/project-files/" + name ; 

    //generamos una ruta absoluta 
    const pathFile = path.join(__dirname,filePath);


    //comprobamos si la imagen existe y en caso que podamos leeerla la retornamos 
    if(fs.existsSync(pathFile)){
        fs.readFile(pathFile,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathFile))
            }
        })
    } else {
        response.status(404).send({message:"Archivo no encontrado"});
    }
}
~~~

- Podemos configurar getFileApi en el cliente para recibir un blob() como respuesta a la peticion :

~~~
export function  getFileApi(name){

    const url = `${basePath}/${apiVersion}/get-file/${name}`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json" 
        }
    };

        return fetch(url,params)
        .then(response => {
            return response.blob()
        }).then(result => {
            return result
        }).catch(error =>{
            return error.message
        })

}
~~~

<a href='https://www.youtube.com/watch?v=io2blfAlO6E'>https://www.youtube.com/watch?v=io2blfAlO6E</a>

- Realizamos la descarga en el componente FileCard meadiante de funcion handleClick() asociada a un button :

~~~
const handleClick = () => {

    //solicitamos el archivo en formato blob desde el server
    getFileApi(fileName).then( response => {

    //creacion de la objectURL mediante el blob    
    const href = URL.createObjectURL(response);
    
    //creacion del anchior y seteo de propiedades
    const a = Object.assign(document.createElement('a'),{
        href,
        style: "display:none",
        download: `${fileName}`
    })

    //agregamos el elemento al body
    document.body.appendChild(a);

    //generamos un evento en el anchor creado
    a.click();
    //limpiamos la URL del navegador una vez echa la descarga
    URL.revokeObjectURL(href);
    //removemos la etiqueta creada
    a.remove();

    })

  };
~~~













