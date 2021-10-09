const express = require("express");
const roles = require("../helpers/roles");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  var responses = [];
  const { name, email, password } = req.body;
  const validName =
    (await User.find({ name: name })).length >= 1 ? false : true;
  const validEmail =
    (await User.find({ email: email })).length >= 1 ? false : true;
  const validateNewUser = (validEmail, validName) => {
    if (!validEmail)
      responses.push({ code: 1, message: "This email is already in use!" });
    if (!validName)
      responses.push({ code: 1, message: "This user name is already in use!" });
    return validName && validEmail;
  };
  if (validateNewUser(validName, validEmail)) {
    const newUser = new User({
      name,
      email,
      password,
      role: roles.regular,
      profilePic:'',
    });
    await newUser.save();
    responses.push({ code: 0, message: "Username Successfully Created!" });
  }

  res.json({ responses });
});
router.post('/login',async (req,res) =>{
  const errors = []
  const {name,password} = req.body
  const getUser= async (name,password)=>{
    const user=await User.find({name,password})
    return user
  }
  const isValid=(user)=> user?.length > 0
  const user = await getUser(name,password)
  if(isValid(user)) 
  {res.json(user)}
  else{
    errors.push("Incorrect username or password")
      res.json({errors})
  }
})
router.put('/update/:id',async (req,res)=>{
    const {id} = req.params
    const {password}=req.body
    console.log(id,password)
    const doc = await user.findOneAndUpdate({_id:id},{password:password},{new:true})
    console.log(doc)

})
module.exports = router;
