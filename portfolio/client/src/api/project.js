//funciones para conectar con los endpoints de project

import {basePath,apiVersion}from './config';

export function newProjectApi(data){

    const url = `${basePath}/${apiVersion}/new-project`;

    const params ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json" 
        }
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

export function getProyectsApi(){

    const url = `${basePath}/${apiVersion}/get-projects`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json" 
        }
    };

        return fetch(url,params)
        .then(response => {
            return response.json()
        }).then(result => {
            return result
        }).catch(err =>{
            return err.message
        })


}

