// traemos express 
const express = require('express');

const app = express() ;
const {API_VERSION} = require('./config');

//carga rutas de project
const projectRoutes = require('./routes/project');
const fileProjectRoutes = require('./routes/fileProject');

//para poder tomar datos del body de la peticion
app.use(express.json());

//router 
app.use(`/api/${API_VERSION}`,projectRoutes);
app.use(`/api/${API_VERSION}`,fileProjectRoutes);




module.exports = app ;