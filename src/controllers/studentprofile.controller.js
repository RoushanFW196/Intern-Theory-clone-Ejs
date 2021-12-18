

const express = require('express');
const router= express.Router();

const studentprofile=require("../models/studentprofile.model.js");

router.get("/student",async(req, res)=>{
    return res.render("register/studentprofile.ejs")
})




router.post("/student",async(req,res)=>{
    try{
    const createprofile= await studentprofile.create(req.body);
   // console.log(createprofile)
  //  res.render("register/studentprofile.ejs",{createprofile});
   return res.send(createprofile)
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


router.get("/student/:student_id",async(req,res)=>{

    const student = await studentprofile.findOne({id:req.params.id}).populate("student_id").lean().exec();
    console.log("heloooooooooooo")
    console.log(student)
    //res.send(student);
 return   res.render("register/studentprofile.ejs",{
     Name:student.student_id.first_Name +" "+ student.student_id.last_name ,
     gender:student.Gender,
     DOB:student.DOB,
     Languages:student.Languages[0],
     Hobbies:student. Hobbies,
     Achievements:student.Achievements,
     Skills:student.Skills,
     Preferences:student.Preferences,
     About:student.About,
     email:student.student_id.email,
     mobile:student.student_id.mobile,
     address:student.address,
     City:student.student_id.city,
     Pincode:student.Pincode,
     levelofeducation:student.LevelOfEducation,
     institute:student.institute,
     Degree:student.Degree,
     selectyear:student.selectyear


 })
})




module.exports = router;