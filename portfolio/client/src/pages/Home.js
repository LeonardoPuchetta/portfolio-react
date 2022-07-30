import React ,{useState,useEffect}from 'react';
import Proyecto from '../components/Proyecto';
import { getProyectsApi } from '../api/project';
import { useNavigate } from 'react-router-dom';

import UpdateProjectForm from './../components/UpdateProjectFrom';
import Modal from './../components/Modal';

import './Home.scss'

export default function Home() {

const [projectsList,setProjectsList] = useState([]);

const [isVisibleModal,setIsVisibleModal] = useState(false);

const [dataProjectModal,setDataProjectModal] = useState({

  id:"",
  title: "",
  link: "",
  skills:[],
  description:"",
  image:"",
  files:[] 
  
})

//traemos todos los proyectos de la base y los guardamos en una lista 
useEffect(() => {
  getProyectsApi().then(response => {
      setProjectsList(response);
    })
    //solo se ejecuta en la primera carga del componente 
}, [])

const arrayProjects = projectsList.projects;


let navigate = useNavigate();
//funcion para redireccionar al formulario de nuevos proyectos 
const toNewProject = () => {
  return (navigate('/new-project'))
}

  return (
    <>
    <div className='home'>
    <div className='div-projects'>
         {
         arrayProjects?.map((project,index) => {
          return (
        <div>
          <Proyecto key={index} title={project.title} description = {project.description}
              link={project.link} skills={project.skills} files={project.files} image={project.image} id={project._id}
              isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal}
              dataProjectModal={dataProjectModal} setDataProjectModal={setDataProjectModal} />
        </div>    
          ) })  
    } 
    </div>

    <div className='new-project-btn'>
      <button onClick={toNewProject}>Nuevo Proyecto</button>
    </div>

    <div className='modal-project'>
          <Modal children={<UpdateProjectForm dataProjectModal={dataProjectModal} 
                            setIsVisibleModal={setIsVisibleModal} isVisibleModal={isVisibleModal}/>} 
            title={dataProjectModal.title}  
            isVisibleModal={isVisibleModal} 
            setIsVisibleModal={setIsVisibleModal}
            />
    </div>
       
    </div>
    </>
  )
}




