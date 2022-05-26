import React from 'react';
import './NewprojectForm.scss';
import { useState } from 'react';

import { newProjectApi } from './../../api/project'


export default function NewProjectForm() {

const [inputs,setInputs] = useState({

    title: "",
    link: "",
    skills:[],
    description:"",
    image:"" 

});

//funcion de onChange del formulario
const changeForm = (event) => {

    //vamos a guardar los valores que no son los checkbox 
    if (event.target.name !== 'checkbox'){
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
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
    
    //guardar datos en la base 

    const resulto = newProjectApi(inputs);

    resetForm();

}

//limpieza del formulario
const resetForm = () => {

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
        image:"" 
    
    })



}




  return (
     
   
       <form className='project-form' name='projectForm' onChange={changeForm} onSubmit={register}>

            <label id='title-label' className='label-description' htmlFor='title'>
            <span>Titulo </span></label>
            <input name='title' type='text' placeholder='Nombre del proyecto' 
            id='title' className='input-form'  value={inputs.title} required/>
        
        
            <label id='link-label' className='label-description' htmlFor='link'>
            <span>Link</span></label>
            <input name='link' type='text' placeholder='Link del proyecto' 
            id='link'  className='input-form'  value={inputs.link} required/>
       


            <label id='description-label' className='label-description' htmlFor='description'>
            <span>Descripcion</span>
            </label>
            <textarea name='description' className='textarea-form' id='description'
            value={inputs.description} required></textarea>



            <div className='skills'>
                    <span>Skills</span><br/>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="html-ckeckbox" value="HTML" name='checkbox'/>HTML</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="css-ckeckbox" value="CSS" name='checkbox'/>CSS</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="javascript-ckeckbox" value="Javascript"name='checkbox'/>Javascript</label>
                    <label id="skill-label" className='label-description'><input type="checkbox" id="javascript-ckeckbox" value="NodeJS"name='checkbox'/>NodeJS</label>

            </div>


            <button type='submit' id='submit' className='btn' >
                <span>Nuevo proyecto</span>
            </button>


       
       </form>
   
  )
}
