import React,{useState,useEffect} from 'react';
import './FileCardList.scss'

import FileCard from '../FileCard';


export default function FileCardList(props) {

    const {files} = props;


  return (
    <div className='filecard-list'>
      
        {
        files.map((file,index) => {
            return (
            <FileCard fileName={file} key={index}/>
            )
        })
        }
        
    </div>
  )
}
