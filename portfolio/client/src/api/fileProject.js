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

export function uploadImageApi(file){

    const url = `${basePath}/${apiVersion}/upload-image`;

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

export function  getFileApi(name){

    const url = `${basePath}/${apiVersion}/get-file/${name}`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json" 
        }
    };

        return fetch(url,params)
        .then(response => {
            return response.blob()
        }).then(result => {
            return result
        }).catch(error =>{
            return error.message
        })



}

export function  getImageApi(name){

    const url = `${basePath}/${apiVersion}/get-image/${name}`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json"  
        }
        

    };

        return fetch(url,params)
        .then(response => {
            
            return response.blob()
        }).then(result => {
            return result
        }).catch(error =>{
            return error.message
        })



}