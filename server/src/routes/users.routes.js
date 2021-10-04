const  express  = require("express");
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req,res)=>{
    const users = await User.find()
    res.json(users)
})

router.post('/',async (req,res) =>{
    console.log(req.body)
})

module.exports = router
