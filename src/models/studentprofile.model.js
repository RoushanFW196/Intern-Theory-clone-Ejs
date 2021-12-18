
 const mongoose = require('mongoose');

const profileSchema=new mongoose.Schema({
    // student_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"registerStudent",
    //     required:true
    // },
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    Gender:{type:"string",required:"true"}, 
    DOB:{type:Date,required:"true"},
    Languages:{type:String,required:"true"},
    Hobbies:{type:"string",required:"true"},
     Achievements:{type:"string",required:"true"},
   Skills:{type:"string",required:"true"},
   Preferences:{type:"string",required:"true"},
   About:{type:"string",required:"true"}
  
  
  // Facebook: link ypur facebook account;
  // Google Account: link ypur google account;

//   Address:{type:"string",required:"true",default:" "},
//   City:{type:"string",required:"false",default:" "},
//   State:{type:"string",required:"false",default:" "},
//   Pincode:{type:Number,required:"true"},

  //----Add Education --//
//  LevelOfEducation:{type:"string",required:"true",default:" "},
//  institute:{type:"string",required:"true"},
//  Degree:{type:"string",required:"false",default:" "},
//  selectyear:{type:"string",required:"true",default:"First Year"}

})




module.exports = mongoose.model("profile",profileSchema); 