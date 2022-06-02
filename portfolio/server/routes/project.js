const express = require('express');

const ProjectController = require('./../controllers/project');


//para poder subir imagenes 
const multiparty = require('connect-multiparty');

//middlewares
//const md_upload_image = multiparty({uploadDir: './uploads/project-image'});


//variable para generar rutas 
const api = express.Router();


api.post('/new-project',ProjectController.newProject);
api.get('/get-projects',ProjectController.getProjects);
//api.put('/upload-image/:id',[md_upload_image],ProjectController.uploadImage);
api.get('/get-image-skill/:skill',ProjectController.getImageSkill);

module.exports = api;