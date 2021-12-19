const express=require('express')
const router= express.Router()

const Job=require("../models/job.model")


// const crudController=require("./crud.controller")




router.get('/',async function (req,res){

let ci=req.query.c
let ty=req.query.t
let pr=req.query.p
let xx=req.query.search


        if(ci!=undefined){
            jobs=await Job.find({ "city" : { $regex: `${ci}`, $options: 'i' } })
        }
        else if(ty!=undefined){
            jobs=await Job.find({ "type" : { $regex: `${ty}`, $options: 'i' } })
            // console.log(jobs)
        } 
        else if(pr!=undefined){
            jobs=await Job.find({ "Category" : { $regex: `${pr}`, $options: 'i' } })
        } 
        else if(xx!=undefined){
            jobs=await Job.find({ "Category" : { $regex: `${xx}`, $options: 'i' } })
        } 
      else
        jobs = await Job.find().lean().exec()
    
        return res.render("Intern/allJobs",{
            jobs,
        })
    })




// router.get('/',async function (req,res){

// let xx=req.query.search
//  if(xx)
//     {
//     jobs=await Job.find({ "Category" : { $regex: `${xx}`, $options: 'i' } })
//     }
//     else
//     jobs = await Job.find().lean().exec()


//     return res.render("Intern/allJobs",{
//         jobs,
//     })
// })

router.get('/:id',async function (req,res){
    const internship = await Job.findById(req.params.id).lean().exec()
    return res.render("Intern/details",{
        internship,
    })
})

// router.get("",crudController.getAll(Job))
// router.get("/:id",crudController.getOne(Job))

module.exports=router;