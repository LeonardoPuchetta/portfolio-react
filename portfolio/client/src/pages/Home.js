import React ,{useState,useEffect}from 'react';
import Proyecto from '../components/Proyecto';
import { getProyectsApi } from '../api/project';

export default function Home() {

const [projectsList,setProjectsList] = useState([]);

useEffect(() => {
    getProyectsApi().then(response => {
      setProjectsList(response)
    })
}, [])

const arrayProjects = projectsList.projects;

//console.log(arrayProjects);


  return (
    <div>
         {
         arrayProjects?.map((project,index) => {

          return (
          <Proyecto key={index} title={project.title} description = {project.description}
              link={project.link} skills={project.skills} 
          />
          ) })  
    } 
    </div>
  )
}




