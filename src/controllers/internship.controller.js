const express=require('express')
const router= express.Router()

const Internship=require("../models/internship.model")


// const crudController=require("./crud.controller")



router.get('/',async function (req,res){

    let ci=req.query.c
    
    let ty=req.query.t
    // console.log('ty:', ty)

    let pr=req.query.p
    // console.log('pr:', pr)

    let xx=req.query.search
    
    
            if(ci!=undefined){
                internships=await Internship.find({ "city" : { $regex: `${ci}`, $options: 'i' } })
            }
            else if(ty!=undefined){
                internships=await Internship.find({ "type" : { $regex: `${ty}`, $options: 'i' } })
                
            } 
            else if(pr!=undefined){
                internships=await Internship.find({ "Category" : { $regex: `${pr}`, $options: 'i' } })
            } 
            else if(xx!=undefined){
                internships=await Internship.find({ "Category" : { $regex: `${xx}`, $options: 'i' } })
            } 
          else
            internships = await Internship.find().lean().exec()
        
            return res.render("Intern/allInternships",{
                internships,
            })
        })
    

router.get('/:id',async function (req,res){
    const internship = await Internship.findById(req.params.id).lean().exec()
    return res.render("Intern/details",{
        internship,
    })
})

// router.get("",crudController.getAll(Internship))
// router.get("/:id",crudController.getOne(Internship))

module.exports=router;