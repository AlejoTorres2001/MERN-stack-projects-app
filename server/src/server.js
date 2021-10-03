const express = require("express");
const morgan = require('morgan');
const app = express();

//settings
app.set("port", process.env.PORT || 3001);
//Middlewares
app.use(morgan('dev'))
app.use(express.json())
//Routes
app.use('/api/users',require('./routes/users.routes'))
//static files

//starting server
app.listen(app.get("port"), () =>
  console.log(`Example app listening on port ${app.get("port")}!`)
);
