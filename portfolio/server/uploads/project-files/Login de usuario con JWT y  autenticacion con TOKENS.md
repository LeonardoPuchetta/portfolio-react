# Creacion del login de usuario con JWT y el sistema de auth con TOKENS 

- Un token es un codigo alfanumerico el cual viajara en las cabeceras de cada peticion http que hagamos al servidor
- El backend debe generar un **token**  para identificar al usuario. 
- El token se guarda en el **client** y es utilizado por el usuario para realizar las peticiones al backend , el token viajara en la cabecera (**header**) de las peticiones y funcionara como un **permiso** para realizar acciones . 

### Tipos de token

- Hay muchos tipos de token, aunque en la autenticación con JWT los más típicos son el access token y el refresh token.

- **Access token**: Lleva contenida toda la información que necesita el servidor para saber si el usuario / dispositivo puede acceder al recurso que está solicitando o no. Suelen ser tokens caducos con un periodo de validez corto.
- **Refresh token**: El refresh token es usado para generar un nuevo access token. Típicamente, si el access token tiene fecha de expiración, una vez que caduca, el usuario tendría que autenticarse de nuevo para obtener un access token. Con el refresh token, este paso se puede saltar y con una petición al API obtener un nuevo access token que permita al usuario seguir accediendo a los recursos de la aplicación.

- Jwt (jason web token) . https://jwt.io/ . 

- Para mas info sobre tokens y su composicion : https://www.youtube.com/watch?v=zut4jK6C6WQ

## Creando el servicio para la creacion de los tokens (server)

- Vamos a utilizar las siguientes dependencias : 
- **jwt-simple**  (npm i jwt-simple) 
- **moment** (npm i moment)

- En server → services → * jwt.js : 

Creamos una clave secreta a partir de la cual se creara el token , esta clave estara alojada en el servidor , y creamos tres funciones exportables , dos de creacion de token (access y refresh) y una de decodificacion de dichos token : 
~~~
const jwt = require('jwt-simple');
const moment = require('moment');

// clave para tokens 
const SECRET_KEY = "xxx";

// funcion de creacion del ACCESS_TOKEN
exports.createAccessToken = function (user){

        // estructura para el token
    //creamos un objeto 
    const payload = {
        id : user._id,
        name : user.name,
        role : user.role,

        //fecha de creacion del token
        createToken:moment().unix(),
        //fecha de expiracion del token
        exp: moment()
            .add(3 , "hours")
            .unix()
        
    }
    // retorno de la funcion 
    return jwt.encode(payload , SECRET_KEY);
    // puede llevar un tercer parametro opcional para elegir el algoritmo de decodificacion 
}

// funcion de creacion del REFRESH_TOKEN
exports.createRefreshToken = function (user){

    const payload = {
        //para comprobar que el id es correcto
        id : user._id,
        //establecemos un tiempo de refresco 
        exp: moment()
        .add(30 , "days")
        .unix()
    }
    return jwt.encode(payload,SECRET_KEY);

}

//funcion para DECODIFICAR el token , decodificara tanto el access token como el refresh token 

exports.decodeToken = function(token){

    return jwt.decode(token , SECRET_KEY , true);

}
~~~

- En el ACCESS_TOKEN debemos crear un objeto **payload** a "tokenizar" en nuestro caso tendra la siguiente info **jamas debe contener el password** , el payload es la info a encriptar : 
~~~
        id : user._id,
        name : user.name,
        role : user.role
~~~
- una fecha de creacion un tiempo de expiracion del token , en nuestro caso incluimos todo en el payload :

~~~
        createToken:moment().unix(),
        exp: moment()
            .add(3 , "hours")
            .unix()
~~~

## Creando un endpoint para dar de alta un usuario en la base de datos (sever) 

- Utilizamos la funcion **hash** de bcrypt para encriptar la contraseña y asignamos el resultado al password del user 
~~~
function signUp(request,response){
   //nueva instancia del modelo User
   const user = new User();

   const { name , password , repeatPassword } = request.body ; 

   //asignamos valores uno a uno con user
   user.name= name;
   user.role= "admin";

    //creamos una estructura condicional 
    if (!password ||!repeatPassword) {  // si falla algun password 
        
        response.status(404).send({message: "Las contrasenas son obligatorias"})
    } else {

        if (password!==repeatPassword){
            response.status(404).send({message: "Las contraseñas tienen que ser iguales"})
        } else {
            //vamos a encriptar la contrasena 
            bcrypt.hash(password ,SALTS_TO_BCRYPT ,function (err , hash ) {
                    
                if (err){
                    response.status(500).send({message: "Hubo un error de encriptacion "})
                    
                } else {
                    // asignamos la contrasena al usuario 
                    user.password= hash ; 
                    // utilizamos una funcion de mongoose para guardar la contrsena en la base de datos 
                    user.save((err , userStored )=>{
                        if (err){
                            response.status(500).send({message: "Error del servidor , el usuario ya existe "})

                        } else {
                                    if (!userStored){
                                        response.status(404).send({message: "Error al crear el usuario "})

                                    } else {
                                        response.status(200).send({user:userStored})
                                            }
                                }
                                                    })
                        }
            })
        }
    }}

~~~

## Creando un endpoint para logear usuario (sever) 

- Recibimos los datos ingresados en el formulario por el body de la peticion 
- Buscamos por name (puede ser email o cualquier otro campo unique) en la base mediante **User.findOne()**
- Comparamos los password (el ingresado en el formulario con el resultante de la busqueda en la base) mediante **bcrypt.compare(password,userStored.password)**
- Si son iguales creamos el accessToken y el refreshToken con las funcionalidades alojadas en **jwt.js** y los retornamos en la response 

~~~
function signIn(request,response){
    const params = request.body ;
    
    const name= params.name;
    const password= params.password;

    //funcionalidad de mongoose para buscar en la base 
    User.findOne({name} , (err, userStored) => {

        if(err){
            response.status(500).send({message:"Error del servidor."})
        } else {
            if (!userStored){
                response.status(404).send({message:"Usuario no encontrado."})
            } else {

                // comparacion de contrasenas con bcrypt la ingresada con la encriptada
                //el valor de la contrasena encriptada es userStored,password 
                bcrypt.compare(password,userStored.password , (err,check)=>{

                    if (err){
                        response.status(500).send({message:"Error del servidor."})

                    } else if (!check) {
                       
                        response.status(404).send({message:"La contraseña es incorrecta."})


                    } else { 
 
                            response.status(200).send({
                                accessToken : jwt.createAccessToken(userStored),
                                refreshToken : jwt.createRefreshToken(userStored)
                                                })
                            }
                }) 
            }
        }
    })
}
~~~

## Creando conexion con el endpoint de login (client)

- **En el caso de signUpApi podemos hacer los ingresos de nuevos usuarios mediante POSTMAN conectando con el signUp del server**

~~~
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
~~~

- En el componente **LoginForm** tendremos una funcion de login asociada al onSubmit del formulario donde **recibiremos los tokens en caso de un login correcto** y los **guardaremos en el localStorage**

~~~
// funcion para realizar el login 
    const login = async event => {

            event.preventDefault();
             const result = await signInApi(inputs);
                if (result.message) {
                        alert(`${result.message}`)
                        return  
                } else {
                    const {accessToken ,refreshToken } = result // destructuring para traer los token 
                    //guardamos en el localStorage los token 
                    localStorage.setItem(ACCESS_TOKEN,accessToken);
                    localStorage.setItem(REFRESH_TOKEN,refreshToken);

                    //mensaje de exito 
                     //redireccionamiento una vez hecho el login 
                    window.location.href = "/Home";
                }
    }     
~~~

## Uso de los tokens 

- La idea de los tokens es proteger ciertas funcionalidades de la aplicacion para que solo esten accesibles a ciertos usuarios (por ejemplo un administrador) 

### Decodificando los tokens y checkeando expiracion

- Vamos a usar **npm i jwt-decode** en el **client** ( el mismo presenta varias vulnerabilidades !)

- Creamos en client -> src -> api -> ***auth.js** 
para decodificar los tokens recibidos y chequear su expiracion :

~~~
import {basePath , apiVersion} from '../api/config';
import {ACCESS_TOKEN , REFRESH_TOKEN} from "../utils/constants";

//paquete para decodificar tokens 
import jwtDecode from 'jwt-decode';

export function getAccessTokenApi () { // devuelve al accessToken siempre y cuando el mismo sea valido 
    // si caduco devuelve null 
   const accessToken = localStorage.getItem(ACCESS_TOKEN) ; 

   if (!accessToken || accessToken === 'null'){
         return null ; 
   } 
   // el return devuelve null en caso de expiracion y accesToken en caso de vigencia 
   return willExpireToken(accessToken) ? null :accessToken ;

}

export function getRefreshTokenApi () { 
    // devuelve al accessToken siempre y cuando el mismo sea valido 
    // si caduco devuelve null 
    const refreshToken = localStorage.getItem(REFRESH_TOKEN) ; 

   if (!refreshToken || refreshToken === 'null'){
   return null ; 
   } 
   // el return devuelve null en caso de expiracion y accesToken en caso de vigencia 
   return willExpireToken(refreshToken) ? null :refreshToken ;

}

export function refreshAccessTokenApi(refreshToken){
   //funcion para refrescar el token del lado del cliente 
   //construimos la url  , refresh-access-token es la url del endpoint 
   const url = `${basePath}/${apiVersion}/refresh-access-token`; 

   //creamos un objeto 
   const bodyObj = {
   refreshToken : refreshToken,
   };

   //creamos los parametros de la peticion 
   //parametros del Endpoint que vamos a enviar 

const params = {                                            
     method: 'POST',                                             
     body: JSON.stringify(bodyObj),
     headers: {
        "Content-type":"application/json",                      
     }


     }; 

// peticion fetch 
fetch(url,params)
.then( response => {
    if (response.status !== 200) {
       return null
     } else {
         return response.json
            }
    }).then( result => {
         if (!result) {
         //deslogeamos el usuario 
         logout();
        } else { // de lo contrario devuelve un token a actualizar en el localStorage
                 const {accessToken , refreshToken} = result ; 
                localStorage.setItem(ACCESS_TOKEN , accessToken);
                localStorage.setItem(REFRESH_TOKEN , refreshToken);
               }
    }

            )

}

   export function logout(){
   //simplemente borra los token del localStorage 
   //luego se realiza la comprobacion usuario logueado - token en un hook 
   localStorage.removeItem(ACCESS_TOKEN);
   localStorage.removeItem(REFRESH_TOKEN);
   }



//funcion que comprueba expiracion del accesToken 
// devuelve true si expiro el token y false si esta vigente 
function willExpireToken (token){

const seconds = 60;
const metaToken = jwtDecode(token);
//sacamos la fecha de expiracion de la decodificacion 
const {exp} = metaToken ; 

const now = (Date.now() + seconds ) / 1000 ; // para cambiar formato de fecha 

return now > exp  

}
~~~

- La funcion **willExpireToken(token)** recibe un token y devuelve true o false si este esta caducado o sigue vigente respectivamente. 

- La funcion **logout()** remueve los tokens del localStorage 

- Las funciones **getAccessTokenApi()** y **getRefreshTokenApi()** devuelven los tokens access y refresh si estos estan vigentes en caso contrario devuelven **null**

- La funcion **refreshAccessTokenApi(refreshToken)** refresca el token del lado del cliente , esta funcion dialoga con el siguiente endpoint en **server-> controllers-> auth.js** :

~~~
const jwt = require('../services/jwt');
const moment = require('moment');

const User = require('../models/user');

// funcion que chequea en el servidor si el token ha expirado 
function willExpireToken(token){

const {exp} = jwt.decodeToken(token);

// fecha actual 
const currentDate = moment().unix();

// comparacion de espiracion con fecha actual 
if (currentDate > exp ) {
    return true ;
}
return false ;
}

function refreshAccessToken(req, res){  // refresca el accessToken 

    //necesitamos verificar que el refreshToken es correcto 
    const {refreshToken} = req.body ; 
   
    //nos fijamos si refreshToken sigue vigente 
    const isTokenExpired = willExpireToken(refreshToken);

    if (isTokenExpired) {
        res.status(404).send({message : "El refreshToken ha expirado"});
    } else {
        //si el refreshToken no ha expirado buscamos el user por _id
        //el _id lo sacamos del mismo refreshToken
        const {id} = jwt.decodeToken(refreshToken) ; 

        User.findOne({_id: id } , (err , userStored) => {
            if (err) {
                res.status(500).send({message : "Error del servidor . "});
            } else {

                if (!userStored){
                    res.status(404).send({message : "Usuario no encontrado . "});

                } else {

                    res.status(200).send({
                        //CREAMOS UN NUEVO TOKEN UTILIZANDO EL USUARIO 
                        accessToken : jwt.createAccessToken(userStored),
                        //refreshToken no se actualiza 
                        refreshToken: refreshToken

                    });
                }
            }
        })
    }
}

module.exports = {
    refreshAccessToken,
}
~~~

- **willExpireToken(token)** verifica en el servidor si el token a expirado (devuleve true en este caso).

- **refreshAccessToken** recibe el refreshToken , verifica si esta vigente y en caso de que lo este extrae el id del usuario del mismo y realiza una busqueda en la base con el id generando un nuevo access token con el usuario resultante ,finalmente devuelve el refreshToken y el accessToken.




- Creamos las rutas en routes : 

~~~
const express = require('express');
const AuthController = require('./../controllers/auth');
const api = express.Router();
api.post('refresh-access-token',AuthController.refreshAccessToken);
module.exports = api
~~~

- Las usamos en app.js :

~~~
//carga rutas de auth
const authRoutes = require('./routes/auth');

app.use(`/api/${API_VERSION}`,authRoutes);
~~~

- Esta funcion tiene su correspondiente en el client llamada refreshAccessTokenApi (api -> auth.js)

~~~
export function refreshAccessTokenApi(refreshToken){
   //funcion para refrescar el token del lado del cliente 
   //construimos la url  , refresh-access-token es la url del endpoint 
   const url = `${basePath}/${apiVersion}/refresh-access-token`; 

   //creamos un objeto 
   const bodyObj = {
   refreshToken : refreshToken,
   };

   //creamos los parametros de la peticion 
   //parametros del Endpoint que vamos a enviar 

const params = {                                            
     method: 'POST',                                             
     body: JSON.stringify(bodyObj),
     headers: {
        "Content-type":"application/json",                      
                }
     }; 

// peticion fetch 
fetch(url,params)
.then( response => {
    if (response.status !== 200) {
       return null
     } else {
         return response.json
            }
    }).then( result => {
         if (!result) {
         //deslogeamos el usuario 
         logout();
        } else { // de lo contrario devuelve un token a actualizar en el localStorage
                 const {accessToken , refreshToken} = result ; 
                localStorage.setItem(ACCESS_TOKEN , accessToken);
                localStorage.setItem(REFRESH_TOKEN , refreshToken);
               }
    }
            )
}

~~~


## Comprobacion de login de usuario y refresco del token mediante Hooks 

<a href='https://johnserrano.co/blog/introduccion-a-react-context-con-los-hooks-de-react'>https://johnserrano.co/blog/introduccion-a-react-context-con-los-hooks-de-react</a>

- Creamos carpeta de **hooks** con un archivo **useAuth.js** , este hook devolvera un contexto con nombre AuthContext el cual proviene de AuthProvider.js , nos permite consumir los datos pasados por el provider
~~~
import React , {useContext} from "react";

import {AuthContext} from './../providers/AuthProvider';

export default () =>  useContext(AuthContext)
~~~

- Creamos la carpeta de **providers** con un archivo **AuthProvider.js** donde **crearemos el contexto** .

~~~
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
~~~

- La idea principal es crear un **contexto** en el cual se envolvera toda nuestra app para saber si estamos ante administradores o no .


- Debemos envolver toda nuestra app en el contexto 
~~~
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            {routes.map((route,index) => (
                  <Route  key={index} 
                          path={route.path}
                          element={ <route.layout>
                                    <route.component/>
                                    </route.layout>}
                            />
            ))}
          </Routes>
      </Router>
    </AuthProvider>
  );
}
~~~

- Ahora en el **layout** de nuestra aplicacion podemos acceder a los valores de contexto mediante el hook creado , de esta manera podremos direccionar nuestra app o habilitar deshabilitar ciertas funciones dependiendo del contexto :

~~~
import useAuth from '../hooks/useAuth';

export default function LayoutBasic(props) {

    const {children} = props;

    //extraemos el admin y el isLoading del contexto 
    const {admin,isLoading} = useAuth();

  return (..................................)
~~~

- **Esta informacion puede ser accesible mediante el hook en cualquier parte de nuestra aplicacion ,por ejemplo en cualquier componente o pagina . De esta manera dependiendo de si el usuario esta logueado podemos realizar redireccionamientos para restringir el acceso a ciertas paginas o hacer renderizados condicionales para restringir funcionalidades .**

## Creacion de middleware para proteger endpoints mediante login 

- Creamos en el server un middleware(Authenticated.js) el cual se ejecutara antes de la funcion invocada por el endpoint , este middleware revisara la cabecera de la peticion en busca del token y chequeara su validez , en caso de que todo salga bien dara paso a la siguiente funcion :

~~~
const jwt =require('jwt-simple');
const moment =require('moment');
// clave para tokens 
const SECRET_KEY = "xxxx";

exports.ensureAuth = (request,response,next) =>{

    //si el usuario no envia el token 
    if(!request.headers.autorization){
            return response.status(403).send({message: "La peticion no tiene cabecera de Autenticacion"})
    } 
        //si viene con token lo formateamos 
        const token = request.headers.authorization.replace(/['"]+/g,"");

        try {
            // si todo sale bien decodificamos el token 
            var payload = jwt.decode(token , SECRET_KEY);
            // chequeamos expiracion del token 
            if (payload.exp <= moment.unix()) {
                return response.status(404).send({message : "El token ha expirado"});
            }
        } catch(ex){
        
           // console.log(ex);
           return response.status(404).send({message : "Token invalido."});
    
        }
        // en caso de que el token sea valido y vigente 
        request.user = payload ;
       // next() da paso a la siguiente funcion que es la ejecucion del endpoint 
        next();
}
~~~

### Uso del middleware 

- En las routes asociadas a los endpoints : 

~~~
//middlewares
const md_auth = require('./../middlewares/authenticated')

api.put('/update-project/:name',[md_auth.ensureAuth],ProjectController.updateProject);
~~~

- de esta manera para usar el endpoint deberemos incluir el accessToken en la cabecera de la peticion . 












 






