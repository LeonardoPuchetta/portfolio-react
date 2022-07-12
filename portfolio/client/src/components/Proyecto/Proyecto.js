import React  from 'react';
import './Proyecto.scss';

import SkillsList from '../SkillsList';
import ImageCard from '../ImageCard';
import FileCardList from '../FileCardList';

import useAuth from '../../hooks/useAuth';



export default function Proyecto(data) {

  const {title,description,skills,link,files,image} = data;

  const {admin,isLoading} = useAuth();



  return (
      <>
  <div className='project'>
    <div className='project-title'>
    <h1 >{title}</h1>
       {admin ? <button>Modificar proyecto</button>:<div></div>}
       {admin ? <button>Borrar proyecto</button>:<div></div>}
    </div>
    
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



