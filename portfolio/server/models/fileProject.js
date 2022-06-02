const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const FileProjectSchema = Schema({
    fileName : {
        type : String,
        required: true,
        unique: true
    },
    urlFile : {
        type : String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('FileProject',FileProjectSchema);