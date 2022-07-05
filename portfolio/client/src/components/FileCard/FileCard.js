import React,{useState} from 'react';

import './FileCard.scss';
import { getFileApi } from '../../api/fileProject';

const imgPath = require.context('./../../assets/icons',true);


export default function FileCard(props) {

const {fileName} = props ;

//const [infoFile,setInfoFile] = useState(null);
//estado para guardar la URL generada 
const [fileDataURL, setFileDataURL] = useState(null);

const fileSplit = fileName.split(".");
const fileAlt = fileSplit[0];

const handleClick = () => {

    //solicitamos el archivo en formato blob desde el server
    getFileApi(fileName).then( response => {

    //creacion de la objectURL mediante el blob    
    const href = URL.createObjectURL(response);
    
    //creacion del anchior y seteo de propiedades
    const a = Object.assign(document.createElement('a'),{
        href,
        style: "display:none",
        download: `${fileName}`
    })

    //agregamos el elemento al body
    document.body.appendChild(a);

    //generamos un evento en el anchor creado
    a.click();
    //limpiamos la URL del navegador una vez echa la descarga
    URL.revokeObjectURL(href);
    //removemos la etiqueta creada
    a.remove();

    })

  };
   
  
  return (
    <div>
        
            <img src={imgPath(`./markdown.svg`)} alt='file' title={fileAlt} type="img/svg"></img>
            <button onClick={handleClick}>
                Descargar
            </button>
        
    </div>
  )
}
