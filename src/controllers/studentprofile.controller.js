

const express = require('express');
const router= express.Router();

const studentprofile=require("../models/studentprofile.model.js");

router.get("/student",async(req, res)=>{
    return res.render("register/studentprofile.ejs")
})




router.post("/student",async(req,res)=>{
    try{
    const createprofile= await studentprofile.create(req.body);
    console.log(createprofile)
    res.render("register/studentprofile.ejs",{createprofile});
    }catch(err){
        {
           return res.status(401).json(
                {
                    status : 'Failed' ,
                    message : err.message,
                });
        }
    }
})

router.get("/student/:id",async(req,res)=>{

    const student = await studentprofile.find({id:req.params.id}).populate("student_id").lean().exec();
    res.send(student);
})




module.exports = router;