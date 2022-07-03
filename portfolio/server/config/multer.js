
const multer = require('multer');
//path para unir directorios 
const path = require('path');

//extensiones de archivos permitidos 
const validExtensionFile = [".md"] ;
//extensiones de imagenes permitidas
const validExtensionImage = [".jpg",".jpeg",".gif",".png"];

//uso de diskStorage
const storage = multer.diskStorage({
    //destino del archivo valiendose de path
    destination : function(request,file,callback){

        const type = path.extname(file.originalname);
        const typeLower = type.toLowerCase();
        const isImageValid = validExtensionImage.includes(typeLower);
        const isFileValid = validExtensionFile.includes(typeLower);

        if(isFileValid){

        callback(null,path.join(__dirname,'../uploads/project-files'));
        
        }else {
            if (isImageValid){
                    callback(null,path.join(__dirname,'../uploads/project-images'))
            } else
                    {
                        return false
                    }
        }
    },
    //le damos nombre archivo
    filename: function(request,file,callback){
        //extraemos la extension del archivo 
        //const extension = file.mimetype.split('/')[1];
        //const name = file.originalname.split('.')[0];
        // const realName = name +'.'+ extension;
    const realName = file.originalname
    callback(null,realName)
    }
})






module.exports = storage