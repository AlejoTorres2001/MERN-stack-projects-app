const  express  = require("express");
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req,res)=>{
    const users = await User.find()
    res.json(users)
})

router.post('/',async (req,res) =>{
    const  NewUserData= {...req.body,role:'regular',profilePic:''}
    console.log(NewUserData)
    res.json({code:"success!"})
    
})

module.exports = router
