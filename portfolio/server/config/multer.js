
const multer = require('multer');
//path para unir directorios 
const path = require('path');

//uso de diskStorage
const storage = multer.diskStorage({
    //destino del archivo valiendose de path
    destination : function(request,file,callback){
        callback(null,path.join(__dirname,'../uploads/project-files'))
    },
    //le damos nombre archivo
    filename: function(request,file,callback){
        //extraemos la extension del archivo 
        //const extension = file.mimetype.split('/')[1];
        //const name = file.originalname.split('.')[0];
        // const realName = name +'.'+ extension;
       const realName = file.originalname
        console.log(realName)

        callback(null,realName)
    }
})

module.exports = storage;