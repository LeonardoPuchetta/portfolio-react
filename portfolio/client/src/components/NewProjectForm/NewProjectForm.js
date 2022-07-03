import React from 'react';
import './NewprojectForm.scss';
import { useState } from 'react';

import { newProjectApi } from './../../api/project'
import { uploadFileApi } from '../../api/fileProject';
import { uploadImageApi } from '../../api/fileProject';


export default function NewProjectForm() {

//extensiones de archivos permitidos 
const validExtensionFile = ["md"] ;
//extensiones de imagenes permitidas
const validExtensionImage = ["jpg","jpeg","gif","png"];


const [inputs,setInputs] = useState({

    title: "",
    link: "",
    skills:[],
    description:"",
    image:"",
    files:[]

});

//constante para recibir archivos cargados en el formulario
const [selectedFiles,setSelectedFiles] = useState([]);
//constante para recibir imagen cargada en el formulario 
const [selectedImage,setSelectedImage] = useState([]);

//funcion de onChange para cada input 
const changeForm = (event) => {

    //vamos a guardar los valores que no son los checkbox 
    if (event.target.name !== 'checkbox'){
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
    } 
    
}
//funcion para cargar archivos en un estado 
const handleFiles = (event) => {

    event.preventDefault();

    //extraemos la lista de archivos del evento 
    const { files } = event.target;

    //creamos una arreglo para guardar los archivos seleccionados 
    const arrayFiles = [] ; 

    //recorremos el objeto FileList y guardamos en el arreglo
    Array.from(files).forEach((file) => {

        if (validExtension(file,validExtensionFile)){
        arrayFiles.push(file);
        } else {
            document.getElementById('upload-file').value = "";
            return alert('Extension de archivos invalida,revise los archivos cargados')
        }
     });
    //asignamos dicho array al estado selectedFiles
    setSelectedFiles(arrayFiles)

}

//funcion para cargar imagenes del proyecto 
const handleImage = (event) => {

    event.preventDefault();
    //extraemos la lista de imagenes del evento 
    const { files } = event.target;

    const image = files[0];

        if (validExtension(image,validExtensionImage)){    
            setSelectedImage(image)
       
        } else {
            document.getElementById('upload-image').value = ""; 
            return alert('Extension de archivos invalida,revise los archivos cargados')
        }
  
}

//funcion de registro de nuevo proyecto
const register = (event) =>{

    event.preventDefault();
    //guardamos los skills en el array de inputs 
     let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
     checkboxes.forEach((checkbox) => {

         if (!inputs.skills.includes(checkbox.value)){
        inputs.skills.push(checkbox.value);
         }
             });

    //recolectamos nombres de los archivos para guardar en la base 
    selectedFiles.forEach((file)=>{
    inputs.files.push(file.name);
    });
    //recolectamos nombres de las imagenes para guardar en la base 
    //selectedImages.forEach((image)=>{
    inputs.image = (selectedImage.name);
    //});
    
    console.log(inputs.files)
    console.log(inputs.image)

    
    //guardar datos en la base 
    const resulto = newProjectApi(inputs);

    //guardar archivos en el servidor 
    selectedFiles.forEach((file) => {
    uploadFileApi(file); 
    });

    //guardar imagenes en el servidor 
    // selectedImages.forEach((file) => {
    //     uploadImageApi(file); 
    //     });
    uploadImageApi(selectedImage)

    resetForm();

}

//limpieza del formulario
const resetForm = () => {

    //limpiamos los archivos del estado 
    setSelectedFiles([]);

    //limpiamos los checkbox
    let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false ;
    });
    //limpiamos los inputs
    setInputs({

        title: "",
        link: "",
        skills:[],
        description:"",
        image:"",
        files:[] 
    
    });
    //vaciamos input de files 
     document.getElementById('upload-file').value = '';
    //vaciamos input de imagenes 
    document.getElementById('upload-image').value = '';


}

//funcion para validar extensiones 
//recibe archivo a array de extensiones admitidas
const validExtension = (file,ext) => {

    let isValid = false ; 

    //extraemos la extension del archivo cargado y la pasamos a minusculas 
    let extension = file.name.split('.');
   //la extension es el ultimo elemento del array creado con split()
    let extensionFile= extension[extension.length - 1];
    //pasamos la extension a minusculas 
    let extensionFileLower = extensionFile.toLowerCase();
 
    ext.forEach((ex)=>{
        if (ex === extensionFileLower){
            isValid = true
        }
    })
    
    return isValid

 
}

  return (
     
   
       <form className='project-form' name='projectForm'  onSubmit={register}>

            <label id='title-label' className='label-description' htmlFor='title'>
            <span>Titulo </span></label>
            <input name='title' type='text' placeholder='Nombre del proyecto' 
            id='title' className='input-form'  value={inputs.title} onChange={changeForm} required/>
        
        
            <label id='link-label' className='label-description' htmlFor='link'>
            <span>Link</span></label>
            <input name='link' type='link' placeholder='Link del proyecto' 
            id='link'  className='input-form'  value={inputs.link} onChange={changeForm} required/>
       


            <label id='description-label' className='label-description' htmlFor='description'>
            <span>Descripcion</span>
            </label>
            <textarea name='description' className='textarea-form' id='description'
            value={inputs.description} onChange={changeForm} required></textarea>



            <div className='skills'>
                    <span>Skills</span><br/>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="html-ckeckbox" value="HTML" name='checkbox'/>HTML</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="css-ckeckbox" value="CSS" name='checkbox'/>CSS</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="javascript-ckeckbox" value="Javascript"name='checkbox'/>Javascript</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="javascript-ckeckbox" value="NodeJS"name='checkbox'/>NodeJS</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="github-ckeckbox" value="Github"name='checkbox'/>Github</label>

            </div>

            <div className='upload-images'>
                <label id="upload-images-label" className='label-description'>
                    Selecciona las imagenes del proyecto
                    <input type="file" 
                        id="upload-image" 
                        onChange={(event)=>handleImage(event)}
                        
                        />
                </label>
                
            </div>

            <div className='upload-files'>
                <label id="upload-files-label" className='label-description'>
                    Selecciona los archivos .md del proyecto 
                    <input type="file" 
                        id="upload-file" 
                        onChange={(event)=>handleFiles(event)} 
                        multiple/>
                </label>
                
            </div>
     
      

            <button type='submit' id='submit' className='btn' >
                <span>Nuevo proyecto</span>
            </button>


       
       </form>
   
  )
}
