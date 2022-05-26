// importacion del modelo 

const { request } = require('../app');
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

function uploadImage(request,response){
    //para recibir id del proyecto
    const params = request.params ; 

    console.log('imagen please');
}

// exportacion de las funcionalidades 

module.exports = {
    newProject,
    getProjects,
    uploadImage

}