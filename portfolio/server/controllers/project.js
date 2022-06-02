// importacion del modelo 

const fs = require('fs');
const path = require('path');
//const { request } = require('../app');
const Project = require('./../models/project');

// funcionalidades 

// para crear nuevo proyecto , en el futuro podemos usarla en un form 
function newProject(request,response){

    const project = new Project();

    //console.log(request.body)

    const {title,link,skills,description} = request.body;

    project.title= title;
    project.link=link;
    project.skills=skills;
    project.description=description;
    //nos falta cargar la imagen del proyecto 
    project.image = "null"
    

    project.save((err,projectStored) => {
        if (err) {
            response.status(500).send({message:"Error del servidor"})
        } else {
            if (!projectStored){
                response.status(404).send({message:"Error al crear el proyecto"})
            } else {
                response.status(200).send({project : projectStored})
            }
        }
    })





 }

function getProjects(request,response){

        Project.find().then((projects)=>{
            if(!projects){
                response.status(404).send({message:"No se han encontrado proyectos"})
            } else {
                response.status(200).send({projects})
            }
        })
}


function getImageSkill(request,response){

    //recibimos la skill en formato lowerCase
    const skillName = request.params.skill;

    //completamos url de la imagen 
    //solo contaremos con imagenes en formato .svg
    const filePath = "./../uploads/skills-images/" + skillName + ".svg" ;

    //generamos una ruta absoluta
    const pathImage= path.join(__dirname,filePath);
    
    //comprobamos si la imagen existe y en caso que podamos leerla la retornamos 
    if(fs.existsSync(pathImage)){
        fs.readFile(pathImage,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                response.sendFile(path.resolve(pathImage))
            }
        })
    } else {
        response.status(404).send({message:"Imagen no encontrada"});
    }

}




// exportacion de las funcionalidades 

module.exports = {
    newProject,
    getProjects,
    
    getImageSkill


}