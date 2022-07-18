const express = require('express');

const ProjectController = require('./../controllers/project');


//para poder subir imagenes 
const multiparty = require('connect-multiparty');

//middlewares
const md_auth = require('./../middlewares/authenticated')
//const md_upload_image = multiparty({uploadDir: './uploads/project-image'});


//variable para generar rutas 
const api = express.Router();


api.post('/new-project',ProjectController.newProject);
api.get('/get-projects',ProjectController.getProjects);
//api.get('/get-image-skill/:skill',ProjectController.getImageSkill);
api.put('/update-project/:id',[md_auth.ensureAuth],ProjectController.updateProject);
api.delete('/delete-project/:id',[md_auth.ensureAuth],ProjectController.deleteProject);


module.exports = api;