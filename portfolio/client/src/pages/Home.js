import React ,{useState,useEffect}from 'react';
import Proyecto from '../components/Proyecto';
import { getProyectsApi } from '../api/project';
import { useNavigate } from 'react-router-dom';

export default function Home() {

const [projectsList,setProjectsList] = useState([]);


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
    <div>
         {
         arrayProjects?.map((project,index) => {
          return (
          <Proyecto key={index} title={project.title} description = {project.description}
              link={project.link} skills={project.skills} files={project.files} image={project.image}
          />
          ) })  
    } 
    <div>
      <button onClick={toNewProject}>Nuevo Proyecto</button>
    </div>
    </div>
    
  )
}




