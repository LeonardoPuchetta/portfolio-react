const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const ProjectSchema = Schema({
    title : String,
    link : String,
    description : String,
    skills: [{
        type: String
    }],
    files:[{
        type: String
    }],
    image: String
    
    
})

module.exports = mongoose.model('Project',ProjectSchema);