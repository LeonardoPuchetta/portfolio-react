import React from 'react';

import './SkillsList.scss';

import Skill from '../Skill/Skill';

export default function SkillsList(props) {

const {skills} = props ;


  return (
      <div>
{
    skills.map((skill,index) => {
        

     return (

        <Skill key={index} name={skill}/>
        )
    } )               
}
    </div>
  )
}
