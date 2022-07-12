import React ,{useState,createContext,useEffect} from 'react';

import {getAccessTokenApi,getRefreshTokenApi,refreshAccessTokenApi,logout} from './../api/auth'
//paquete para decodificar tokens 
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export default function AuthProvider(props){

    //sacamos el hijo que en este caso seran todas las rutas 
    const {children} = props;
    
    //definimos un estado para administrador logeado
    const [admin,setAdmin] = useState({
        adimin : null ,
        isLoading :true
    })

    //cada vez que se recarge la pagina se chequeara el login
    useEffect(()=>{
        checkAdminLogin(setAdmin)
       
    },[]);

    return <AuthContext.Provider value={admin}>{children}</AuthContext.Provider>

}

function checkAdminLogin(setAdmin){
    const accessToken = getAccessTokenApi();

    if (!accessToken) {
        //si el accessToken es false o null revisamos el refreshToken
        const refreshToken = getRefreshTokenApi();
            if(!refreshToken) {
                //si esta caducado el refresh deslogueamos y setamos el admin en null
                logout();
                setAdmin({
                    admin: null,
                    isLoading: true
                })
            } else { // si hay refreshToken refrescamos 
                refreshAccessTokenApi(refreshToken);
            }
    } else { //si tenemos token setemos el admin 
        setAdmin({
            isLoading: false,
            admin:jwtDecode(accessToken)
    })
    }
    

}