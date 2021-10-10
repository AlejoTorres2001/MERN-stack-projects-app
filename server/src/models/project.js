const mongoose = require('mongoose')
const {Schema} = mongoose;
const ProjectSchema = new Schema(

    {
        name:{type:String,required:true},
        description:{type:String,required:true},
        picture:{type:String,required:false},
        owner:{type:String,required:true},


    }
)
module.exports = mongoose.model('Project',ProjectSchema)