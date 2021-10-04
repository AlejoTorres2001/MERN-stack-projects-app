const  express  = require("express");
const router = express.Router();
const User = require('../models/user')

router.get('/', (req,res)=>{
    User.find(function (err,users) {
        console.log(users)
    })

    res.json({
        status:'it Works!'
    })
})


module.exports = router
