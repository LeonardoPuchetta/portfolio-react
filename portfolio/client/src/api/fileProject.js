//funciones para conectar con los endpoints de fileProject
import {basePath,apiVersion}from './config';

export function uploadFileApi(file){

    const url = `${basePath}/${apiVersion}/upload-file`;

    const formData = new FormData() ;
    formData.append("file",file);


    const params ={
        method: 'POST',
        body: formData,
      
    };

    return fetch(url,params)
            .then(response => {
                return response.json()
            }).then(result => {
                return result
            }).catch(err =>{
                return err
            })


}