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
        }).catch(error =>{
            return error.message
        })


}

export function updateProjectApi(projectData,projectId,token){

    const url = `${basePath}/${apiVersion}/update-project/${projectId}`

    const params ={
        method: 'PUT',
        body: JSON.stringify(projectData),
        headers: {
            "Content-type":"application/json",
            "Authorization": token
        }
    };

        // retornamos un fetch() o sea una peticion asincrona
        return fetch (url ,params)
        .then (response => {
            return response.json()
        })
        .then (result => {
            return result ; 
        })  // por si tiene error , devuelve el mensaje de error del endpoint 
        .catch(err=> {
            return err.message
        }   
            )
}

export function deleteProjectApi(projectId,token){

    const url = `${basePath}/${apiVersion}/delete-project/${projectId}`

    const params = {
        method :'DELETE',
        headers : {
            "Content-type":"application/json",
            "Authorization": token
        }
    }

         // retornamos un fetch() o sea una peticion asincrona
         return fetch (url ,params)
         .then (response => {
             return response.json()
         })
         .then (result => {
             return result ; 
         })  // por si tiene error , devuelve el mensaje de error del endpoint 
         .catch(err=> {
             return err.message
         }   
             )

}





