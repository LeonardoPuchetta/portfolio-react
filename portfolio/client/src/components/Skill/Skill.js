import React from 'react';
import { IconButton } from '@mui/material'
import './Skill.scss';

const imgPath = require.context('./../../assets/skills-images',true);

export default function Skill(props) {

  const {name} = props;

  const skillName= name.toLowerCase();

  return (
    <>
    <div  className='skill'>
        <img src={imgPath(`./${skillName}.svg`)} alt={skillName} type="img/svg" className='skill-image' />
        <h6 className='skill-image-description'>{skillName}</h6>
    </div>
    
    </>
  )
}


//{
//   // Use IntelliSense para saber los atributos posibles.
//   // Mantenga el puntero para ver las descripciones de los existentes atributos.
//   // Para más información, visite: https://go.microsoft.com/fwlink/?linkid=830387
//   "version": "0.2.0",
//   "configurations": [

//       {
//           "type": "pwa-chrome",
//           "request": "launch",
//           "name": "Launch Chrome against localhost",
//           "url": "http://localhost:8080",
//           "webRoot": "${workspaceFolder}"
//       }
//   ]
// }