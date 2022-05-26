import React from 'react';
import './Proyecto.scss';

export default function Proyecto(data) {

  const {title,description,skills,link} = data;



  return (
      <>
  <div className='project'>
    <h1 className='project-title'> {title}</h1>
    <div className='project-area'>
          <div className='project-image'>
            Imagen
          </div>
          <div className='project-link'>
            <a href ={link}>Ver proyecto</a>
          </div>
          <div className='project-skills'>
            {skills}
          </div>
            
          <div className='project-description'>
            {description}
          </div>
    </div>
  </div>
    </>
  )
}
