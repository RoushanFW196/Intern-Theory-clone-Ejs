const express = require("express");

const Post = require("../models/cart.model");

// const authenticate = require("../middlewares/authenticate");

// const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // const user = req.query.user;

    // console.log(req.body)

    const post = await Post.create(

      req.body

    );
    // console.log(post)

    return res.status(201).json({ post });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {

    let posts;
    const user_id = req.query.user;
    // console.log(user_id);
    if (user_id) {
      posts = await Post.find({ 'user': user_id }).populate("course");
    }



    // .populate("movie_id").lean().exec()

    // res.send({ carts })
    // console.log(posts);
    return res.render("courses/cart", { posts })
    // return res.send(posts)

  }
  catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }




  // const posts = await Post.find().populate("course").lean().exec();

  // return res.send({ posts });
  // return res.render("courses/cart", { posts })


});



router.delete("/delete/:id", async (req, res) => {

  try {

    const post = await Post.findByIdAndDelete(req.params.id).lean().exec();

    res.status(200).send(post)

  }
  catch (e) {
    return res.status(500).json({ message: err.message, status: "Faild" });

  }


})




module.exports = router;


