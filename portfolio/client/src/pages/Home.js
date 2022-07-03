import React ,{useState,useEffect}from 'react';
import Proyecto from '../components/Proyecto';
import { getProyectsApi } from '../api/project';

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
    </div>
  )
}




