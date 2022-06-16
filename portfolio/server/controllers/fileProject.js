

const FileProject = require('./../models/fileProject');

function uploadFile(request,response){

    //extraemos el archivo y el body de la request
    const {body,file} = request;

    if (file && body){

        const name = file.filename;

        const newFile = new FileProject({
            fileName : `${name}`,
            urlFile : `./../uploads/project-files/${name}`

        });

        newFile.save((error,fileStored)=>{
            if (error){
                response.status(500).send({message : 'Error en el servidor'})
            } else {
                if(!fileStored){
                    response.status(404).send({message:'Error al guardar archivo'})
                } else {
                    response.status(200).send({newFile:fileStored})
                }
            }
        })

    }
}

// function getFile(request,response){

//     //recuperamos id de la peticion 
//     const {id} = request.params ;
//     console.log(id);
   
//     FileProject.find({"_id":id}).then((file)=>{
//         if(!file){
//             response.status(404).send({message:"No se han encontrado archivos"})
//         } else {
//             response.status(200).send({file})
//         }
//     })



// console.log('dame un file')

// }



module.exports = {
    uploadFile,
    //getFile
}



