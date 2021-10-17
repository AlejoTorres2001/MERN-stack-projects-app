const express = require("express");
const { codes, message } = require("../helpers/responses");
const project = require("../models/project");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const projects = await project.find({ owner: name });
    res.json(projects);
  } catch (error) {
    res.json({ code: codes.error, message: message.error });
  }
});
router.get('/:projectId',async(req,res)=>{
  const {projectId}= req.params
  console.log(projectId) 
  const pr=await project.findOne({_id:projectId.substring(1)}) 
  res.json(pr)
})

module.exports = router;
