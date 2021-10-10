const express = require("express");
const { codes, message } = require("../helpers/responses");
const project = require("../models/project");
const router = express.Router();


router.post('/',async (req,res) =>{
    const {name} = req.body
    try {
        console.log(name)
        const  projects = await project.find({owner:name})
        console.log(projects)
        res.json(projects)
    } catch (error) {
        res.json({code:codes.error,message:message.error})
        
    }
    



})

module.exports = router;
