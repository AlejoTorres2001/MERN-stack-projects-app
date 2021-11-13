const express = require("express");
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database')
const bodyParser = require('body-parser');
//settings
app.set("port", process.env.PORT || 3001);
//Middlewares
app.use(morgan('dev'))
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({limit: '20mb'}));
//Routes
app.use('/api/users',require('./routes/users.routes'))
app.use('/api/projects',require('./routes/projects.routes'))
//static files

//starting server
app.listen(app.get("port"), () =>
  console.log(`Example app listening on port ${app.get("port")}!`)
);
