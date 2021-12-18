const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    image:{type:String,required:true},
    position:{type:String,required:true},
    cname:{type:String,required:true},
    type:{type:String,required:true},
    Category:{type:String,required:true},
    catType:{type:String,required:true},
    openings:{type:Number,required:true},
    start_date:{type:String,required:true},
    application_deadline:{type:String,required:true},
    salary:{type:String,required:true},
    description:{type:String,required:true},
    perks:{type:String,required:true},
    skills:{type:String,required:true},
    company_description:{type:String,required:true},
    location:{type:String,required:true},
    city:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true
})


module.exports=mongoose.model("job",jobSchema)