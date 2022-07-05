import React ,{useEffect, useState} from 'react';
import './Proyecto.scss';

import SkillsList from '../SkillsList';
import ImageCard from '../ImageCard';
import FileCardList from '../FileCardList';



export default function Proyecto(data) {

  const {title,description,skills,link,files,image} = data;


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
            <FileCardList  files={files}/>
          </div>
    </div>
  </div>
    </>
  )
  }



