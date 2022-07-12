const express = require('express');

const UserController = require('../controllers/user');

// variable para generar otra ruta 
const api = express.Router();

api.post("/sign-up",UserController.signUp);
api.post("/sign-in",UserController.signIn);

module.exports = api 