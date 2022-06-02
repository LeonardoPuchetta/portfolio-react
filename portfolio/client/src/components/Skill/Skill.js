import React from 'react';
import './Skill.scss';

const imgPath = require.context('./../../assets/skills-images',true);

export default function Skill(props) {

  const {name} = props;

  const skillName= name.toLowerCase();

  return (
    <>
    <div className='skill-image'>
    <img src={imgPath(`./${skillName}.svg`)} alt={skillName} type="img/svg"></img>       
    </div>
    <span>{skillName}</span>
    
    </>
  )
}
