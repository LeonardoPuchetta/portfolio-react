const fs = require('fs');
const path = require('path');

const FileProject = require('./../models/fileProject');

//funcion para registrar archivos subidos
function uploadFile(request,response){

    //extraemos el archivo y el body de la request
    const {body,file} = request;

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
function uploadImage(request,response){

    //extraemos el archivo y el body de la request
    const {body,file} = request;

    if (file && body){

        const name = file.filename;

        const newFile = new FileProject({
            fileName : `${name}`,
            urlFile : `./../uploads/project-images/${name}`

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
//funcion para retornar archivos al recibir por params el nombre del mismo 
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

//funcion para retornar imagenes al recibir por params el nombre de la misma 
function getImage (request,response){

    const {name} = request.params;
    
    const filePath = "./../uploads/project-images/" + name ; 

    //generamos una ruta absoluta 
    const pathImage = path.join(__dirname,filePath);


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








module.exports = {
    uploadFile,
    uploadImage,
    getFile,
    getImage
}



