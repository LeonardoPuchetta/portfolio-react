const express = require('express');
const FileProjectController = require('./../controllers/fileProject');


const multer = require('multer');
//traemos el archivo de configuracion de multer
const storage = require('./../config/multer');

const uploader = multer ({storage});

//variable para generar rutas 
const api = express.Router();

api.post('/upload-file',uploader.single('file'),FileProjectController.uploadFile);



module.exports = api;