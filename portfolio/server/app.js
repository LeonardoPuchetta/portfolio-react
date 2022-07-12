// traemos express 
const express = require('express');

const app = express() ;
const {API_VERSION} = require('./config');

//carga rutas de project
const projectRoutes = require('./routes/project');
//carga rutas de fileProject
const fileProjectRoutes = require('./routes/fileProject');
//carga rutas de admin 
const userRoutes = require('./routes/user');
//carga rutas de auth
const authRoutes = require('./routes/auth');

//para poder tomar datos del body de la peticion
app.use(express.json());

//Configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//router 
app.use(`/api/${API_VERSION}`,projectRoutes);
app.use(`/api/${API_VERSION}`,fileProjectRoutes);
app.use(`/api/${API_VERSION}`,userRoutes);
app.use(`/api/${API_VERSION}`,authRoutes);




module.exports = app ;