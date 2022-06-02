const express = require('express');
const FileProjectController = require('./../controllers/fileProject');


const multer = require('multer');

const storage = require('./../config/multer');
const uploader = multer ({storage});

//variable para generar rutas 
const api = express.Router();

api.post('/upload-file',uploader.single('file'),FileProjectController.uploadFile);
api.get('/get-file/:id',FileProjectController.getFile);


module.exports = api;