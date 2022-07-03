import React ,{useEffect, useState} from 'react';
import './Proyecto.scss';

import SkillsList from '../SkillsList';
import ImageCard from '../ImageCard';

import { getFileApi } from '../../api/fileProject';

export default function Proyecto(data) {

  const {title,description,skills,link,files,image} = data;

  //estados para guardar la informacion de los archivos guardados en el server 
  const [infoFiles,setInfoFiles] = useState([]);
 

//efecto para recoger informacion de los archivos 
useEffect(()=>{
  //creas un arreglo que contenga las promesas
  const promesas = []
  //Obtienes solo las promesas
  files.forEach(fileName=> promesas.push(getFileApi(fileName)))
          Promise.all(promesas)
          .then( response=> {
          setInfoFiles(response)
          } );
          
 },[files]);


  return (
      <>
  <div className='project'>
    <h1 className='project-title'>{title}</h1>
    <div className='project-area'>
        <div className='project-image'>
            <ImageCard image={image}/>
        </div>

          <div className='project-skills'>
            <SkillsList skills={skills}/>
          </div>
            
          <div className='project-description'>
            {description}
          </div>
         
          <div className='project-files'>
            <p>Documentacion vinculada</p>
            {files}
          </div>
    </div>
  </div>
    </>
  )
  }



