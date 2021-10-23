const express = require("express");
const responses = require("../helpers/responses");
const roles = require("../helpers/roles");
const project = require("../models/project");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

const { error, success } = responses.codes;
const {
  emailError,
  usernameError,
  userCreated,
  userUpdated,
  loginError,
  error: genericError,
  userDeleted,
} = responses.message;

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
      responses.push({ code: responses.error, message: emailError });
    if (!validName)
      responses.push({ code: responses.error, message: usernameError });
    return validName && validEmail;
  };
  if (validateNewUser(validName, validEmail)) {
    const newUser = new User({
      name,
      email,
      password,
      role: roles.regular,
      profilePic: "",
    });
    try {
      await newUser.save();
      responses.push({ code: responses.success, message: userCreated });
    } catch (error) {
      responses.push({ code: responses.error, message: genericError });
    }
  }

  res.json({ responses });
});
router.post("/login", async (req, res) => {
  const errors = [];
  const { name, password } = req.body;
  const getUser = async (name, password) => {
    const user = await User.find({ name, password });
    return user;
  };
  const isValid = (user) => user?.length > 0;
  const user = await getUser(name, password);
  if (isValid(user)) {
    res.json(user);
  } else {
    errors.push(loginError);
    res.json({ errors });
  }
});
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {name} = await user.findOne({_id:id},{_id:0,name:1})
    console.log(name)
    await user.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    console.log(await project.updateMany({owner:name},{owner:req.body?.name}))
    res.json({ code: responses.codes.success, message: userUpdated });
    
  } catch (error) {
    res.json({ code: responses.codes.error, message: genericError });
  }
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await user.findOneAndRemove({ _id: id });
    res.json({ code: responses.codes.success, message: userDeleted });
  } catch (error) {
    res.json({ code: responses.codes.error, message: genericError });
  }
});
module.exports = router;
