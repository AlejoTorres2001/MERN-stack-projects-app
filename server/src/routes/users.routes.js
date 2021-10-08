const  express  = require("express");
const { roles } = require("../helpers/roles");
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req,res)=>{
    const users = await User.find()
    res.json(users)
})

router.post('/',async (req,res) =>{
    var responses=[]
    const {name,email,password} = req.body
    const validName = (await User.find({name:name})).length >=1 ? false :true
    const validEmail = (await User.find({email:email})).length >= 1 ? false :true 
    const validateNewUser = (validEmail,validName) =>{
        if(!validEmail) responses.push({code:1,message:"This email is already in use!"})
        if(!validName) responses.push({code:1,message:"This user name is already in use!"})
        return validName && validEmail
    }
    if (validateNewUser(validName,validEmail)) {
        const newUser = new User({
            name,
            email,
            password,
            role:roles.regular
        })
        await newUser.save()
        responses.push({code:0,message:"Username Successfully Created!"})
    }
    
    res.json({responses})
    
    console.log({responses})
})

module.exports = router
