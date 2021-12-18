

const express = require('express');
const router= express.Router();

const studentprofile=require("../models/studentprofile.model.js");
const upload=require('../middlewares/upload')


router.get("/student",async(req, res)=>{
    const newuserprofile= await 
    console.log("file shown")
    return res.render("register/studentprofile.ejs")
})




// router.post("/",
// upload.single('image_urls'),
// async(req,res)=>{
//     console.log("post karo")
//     console.log(req.body)
//     try{
//     const createprofile= await studentprofile.create({
       
//         first_name:req.body.first_name ,
//          last_name:req.body.last_name ,
            //   Gender:req.body.Gender,
            //   DOB:req.body.DOB,
            //  Languages:req.body.Languages,
            //  Hobbies:req.body. Hobbies,
            //  Achievements:req.body.Achievements,
            //  Skills:req.body.Skills,
            //  Preferences:req.body.Preferences,
            //  About:req.body.About,

//     });
//     console.log(createprofile)
//    // res.render("register/studentprofile.ejs",{createprofile});
//   // return res.json({createprofile}) 
//   res.send("hello brother")
//     }catch(err){
//         {
//            return res.status(401).json(
//                 {
//                     status : 'Failed' ,
//                     message : err.message,
//                 });
//         }
//     }
// })









// router.get("/student",async(req,res)=>{
//     console.log("file shown shown")
//     const student = await studentprofile.find({}).lean().exec();
//     console.log("heloooooooooooo")
//     console.log(student)
//     res.send(student);
// return   res.render("register/studentprofile.ejs",{
//      Name:student.student_id.first_Name +" "+ student.student_id.last_name ,
//      gender:student.Gender,
//      DOB:student.DOB,
//      Languages:student.Languages[0],
//      Hobbies:student. Hobbies,
//      Achievements:student.Achievements,
//      Skills:student.Skills,
//      Preferences:student.Preferences,
//      About:student.About,
//      email:student.student_id.email,
//      mobile:student.student_id.mobile,
//      address:student.address,
//      City:student.student_id.city,
//      Pincode:student.Pincode,
//      levelofeducation:student.LevelOfEducation,
//      institute:student.institute,
//      Degree:student.Degree,
//      selectyear:student.selectyear


//  })
//})




module.exports = router;