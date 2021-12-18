const express = require('express');

const ejs = require('ejs');
const bodyparser = require('body-parser')


const registerStudentController = require('./controllers/registerStudent.controller')
const loginStudentController = require('./controllers/loginStudent.controller');

const courseController = require("./controllers/course.controller");
const cartController = require("./controllers/cart.controller");

const jobController=require('./controllers/job.controller')
const internshipController=require('./controllers/internship.controller')
const app = express();

app.use(express.json());


app.use(express.static("public")) // for adding js and css file

//set templating Enginge
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/register', registerStudentController);
app.use("/login", loginStudentController);

app.use("/cart", cartController);
app.use("/courses", courseController);

app.use("/jobs",jobController)
app.use("/internships",internshipController)

app.get('/InternTheory',async function (req,res){
    return res.render("Intern/home",{
    })
})

app.get('/InternTheory/contact-us',async function (req,res){
    return res.render("Intern/contactus",{
    })
})



module.exports = app;