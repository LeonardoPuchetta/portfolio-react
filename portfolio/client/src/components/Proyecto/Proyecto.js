import React ,{useState} from 'react';
import './Proyecto.scss';

import SkillsList from '../SkillsList';
import ImageCard from '../ImageCard';
import FileCardList from '../FileCardList';
import { deleteProjectApi } from '../../api/project';
import { getAccessTokenApi } from '../../api/auth';


import useAuth from '../../hooks/useAuth';

export default function Proyecto(data) {

  const {title,description,skills,link,files,image,
   setDataProjectModal,dataProjectModal,setIsVisibleModal,isVisibleModal,id} = data;

  const {admin,isLoading} = useAuth();


  const getUpdateForm = () => {
    setDataProjectModal({
      id:id,
      title: title,
      link: link,
      skills:skills,
      description:description,
      image:image,
      files:files 
    })
    setIsVisibleModal(true);
  }

  const deleteProject = () => {
    const token = getAccessTokenApi();
    deleteProjectApi(id,token);

  }
  


  return (
      <>
  <div className='project'>
        <div className='project-title'>
            <div className='div-title'>
              <h1 >{title}</h1>
            </div>
            <div className='div-link'>
               <a target='_blank' href={link}>{link}</a>
            </div>
            <div className='div-btn'>
                {admin ? <button className='update-btn'onClick={getUpdateForm}>Modificar proyecto</button>:<div></div>}
                {admin ? <button className='delete-btn' onClick={deleteProject}>Borrar proyecto</button>:<div></div>}
            </div>
        </div>
    
        <div className='project-area'>

            <div className='project-area-image'>
                <ImageCard image={image}/>
            </div>

            <div>
                  <div className='project-area-description'>
                    {description}
                  </div>
                  <div>
                    <h4>Lenguajes , frameworks y herramientas utilizados</h4>
                  </div>
                  <div className='project-area-skills'>
                    <SkillsList skills={skills}/>
                  </div>
            </div>

            <div className='project-area-files'>
                  <FileCardList  files={files}/>
            </div>
        </div>
  </div>
    </>
  )
  }



