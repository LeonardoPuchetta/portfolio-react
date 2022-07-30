const API_VERSION = "v1";
//cte que representa conexion local
const IP_SERVER = "localhost";
//puerto de la base de datos 
const PORT_DB = 27017;
// puerto donde corre el servidor 
const PORT_SERVER = process.env.PORT || 3977;

module.exports = {
    
    API_VERSION,
    IP_SERVER,
    PORT_DB,
    PORT_SERVER

}