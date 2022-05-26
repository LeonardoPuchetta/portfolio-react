const mongoose = require('mongoose');

const Schema = mongoose.Schema ; 

const ProjectSchema = Schema({
    title : String,
    image:String,
    link : String,
    skills: [{
        type: String
    }],
    description: String,
    
})

module.exports = mongoose.model('Project',ProjectSchema);