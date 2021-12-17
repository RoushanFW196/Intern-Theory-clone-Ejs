



const express=require('express');
const router=express.Router();
const path=require('path');
const RegisterStudent = require('../models/registerStudent.model');
const upload=require('../middlewares/upload')
const jwt=require("jsonwebtoken")
require("dotenv").config();
 const newToken=(user)=>{
     return jwt.sign({id:user.id},process.env. JWT_ACCESS_KEY)
 }




router.post("/",
upload.single('image_urls'),
async(req,res)=>{
    console.log("hoool")
    try{
        let user=await RegisterStudent.findOne({email:req.body.email})
  
        if(!user){
            return res.status(400).json({status:'failed',message:"username or password incorrect"})
        }
    
        const match=await user.checkPassword(req.body.password)
   
  console.log("match",match)
       
        if(!match)
        return res.status(400).json({status:'failed',message:"username or password incorrect"})
  
        console.log("login ho gya",user)
        const token = newToken(user)
   //  res.render("register/loginasstudent.ejs")
       // res.status(201).json({user,token})
       return res.render("register/studentprofile.ejs",{user,token}) 
  
    }catch(e){
        return res.status(500).json({status:"failed",message:e.message})
    }

 })


 router.get('/new' , async ( req,res) => {
     console.log(req.body)
    try{
        const registerStudent = await RegisterStudent.find().lean().exec();
        //return res.status(201).send(registerStudent)
        return res.render('register/loginAsStudent.ejs',{
      
        })

    }catch (e) {
        res.status(401).json(
            {
                status : 'Failed' ,
                message : e.message,
            });
    }
})

 

 module.exports =router;




