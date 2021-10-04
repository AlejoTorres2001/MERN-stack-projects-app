const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema (
    {
        role: {type:String,required:true},
        name: {type:String,required:true},
        email: {type:String,required:true},
        profilePic:{type:String,required:false},
      }
)
module.exports = mongoose.model('User',UserSchema)