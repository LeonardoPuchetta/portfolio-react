import React,{useState,useEffect} from 'react';
import './FileCardList.scss'

import FileCard from '../FileCard';


export default function FileCardList(props) {

    const {files} = props;

//     //estados para guardar la informacion de los archivos guardados en el server 
//     const [infoFiles,setInfoFiles] = useState([]);

//     //efecto para recoger informacion de los archivos 
//     useEffect(()=>{
//     //creas un arreglo que contenga las promesas
//     const promesas = []
//     //Obtienes solo las promesas
//     files.forEach(fileName=> promesas.push(getFileApi(fileName)))
//             Promise.all(promesas)
//             .then( response=> {
//             setInfoFiles(response)
//             } );
            
//    },[files]);
  
//    console.log(infoFiles)

  return (
    <div>
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
