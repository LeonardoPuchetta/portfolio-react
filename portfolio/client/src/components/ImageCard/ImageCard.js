import React , {useEffect,useState} from 'react';
import './ImageCard.scss'
import { getImageApi } from '../../api/fileProject';


export default function ImageCard(props) {

    const {image}= props ; 

    //estado para guardar la URL generada 
    const [fileDataURL, setFileDataURL] = useState(null);


   // funcion para leer el archivo de imagen 
   function readImage(file) {
  // Check if the file is an image.
  // if (file.type && !file.type.startsWith('image/')) {
  //   console.log('File is not an image.', file.type, file);
  //   return;
  // }

  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    setFileDataURL(event.target.result)
    //img.src = event.target.result;
    
  });
  reader.readAsDataURL(file);
  
  }

 const readWithDelay =  () => {

  getImageApi(image).then(response => {
    setTimeout(
        readImage(response)
    ,50);

   });
   
}
readWithDelay()


  return (
    <div>
        
    <img className='img' src={fileDataURL}></img>
           
           
    </div>
    
      
  )
}
