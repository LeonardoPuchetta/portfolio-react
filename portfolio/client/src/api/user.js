import {basePath,apiVersion}from './config';

export function signInApi(dataUser) {

    const url = `${basePath}/${apiVersion}/sign-in`;

    const params = {
        method: 'POST',                                            
        body: JSON.stringify(dataUser),
        headers: {
            "Content-type":"application/json",                        
        }

    }

    // retornamos un fetch() o sea una peticion asincrona
    return fetch(url,params)

    .then(response => {
       return response.json()
            }).then(result =>{
                return result; 
                })
                    .catch(err => {
                        return err.message
                    })



}