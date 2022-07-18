const jwt =require('jwt-simple');
const moment =require('moment');
// clave para tokens 
const SECRET_KEY = "asuhed6lo3ppidhfcxx8061222";

exports.ensureAuth = (request,response,next) => {

    //si el usuario no envia el token 
    if(!request.headers.authorization){
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