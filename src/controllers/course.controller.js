const express = require("express");
const Course = require("../models/course.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        return res.status(201).json({ course })
    }
    catch (e) {
        res.status(500).json({ "message": e.message, "status": "Failed" });
    }
});

router.get("/", async (req, res) => {
    try {
        const course = await Course.find().lean().exec();
        //console.log(course)
        return res.render("courses/all", { course });
    } catch (e) {
        res.status(500).json({ "message": e.message, "status": "Failed" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean().exec();
        //console.log(course)
        return res.render("courses/single", { course });
        // return res.send({ course })
    } catch (e) {
        res.status(500).json({ "message": e.message, "status": "Failed" });
    }
});

// router.delete("/:id", async (req, res) => {
//     try {
//         const course = await Course.findByIdAndDelete(req.params.id).lean().exec();
//         res.status(204).json({ course });
//     } catch (e) {
//         res.status(500).json({ "message": e.message, "status": "Failed" });
//     }
// });



module.exports = router;
