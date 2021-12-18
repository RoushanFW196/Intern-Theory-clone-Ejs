const express = require('express');

const ejs = require('ejs');
const bodyparser = require('body-parser')


const registerStudentController = require('./controllers/registerStudent.controller')
const loginStudentController = require('./controllers/loginStudent.controller');
const studentprofilesController = require('./controllers/studentprofile.controller.js')
const courseController = require("./controllers/course.controller");
const cartController = require("./controllers/cart.controller");
const app = express();

app.use(express.json());


app.use(express.static("public")) // for adding js and css file

//set templating Enginge
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/register', registerStudentController);
app.use("/login", loginStudentController);
app.use("/profile", studentprofilesController);
app.use("/cart", cartController);
app.use("/courses", courseController);

module.exports = app;