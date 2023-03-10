const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const CartModel = require("../models/Cart_model");
const protectedRoute = require("../middleware/protectedResource");
//Create a new post
router.post("/cart", protectedRoute, (req, res) => {
  const { productName, Cost, Brand, Image } = req.body;
  if (!productName || !productCost || !quantity) {
    return res.status(400).json({ error: "Please enter mandatory fields" });
  }
  req.user.password = undefined;
  const postObj = new PostModel({
    productName: productName,
    Cost: Cost,
    Brand: Brand,
    Image: Image,
    author: req.user,
  });
  postObj
    .save()
    .then((newPost) => {
      res.status(201).json({ post: newPost });
    })
    .catch((error) => {
      console.log(error);
    });
});
//To delete Post
router.delete("/deletepost/:postId", protectedRoute, (req, res) => {
  PostModel.findOne({ _id: req.params.postId })
    .populate("author", "_id")
    .exec((error, postFound) => {
      if (error || !postFound) {
        return res.status(400).json({ error: "Post does not exist" });
      }
      //Check if the post author is same as logged in user , only then allow deletion
      if (postFound.author._id.toString() === req.user._id.toString()) {
        postFound
          .remove()
          .then((data) => {
            res.status(200).json({ result: data });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
});
//All posts only from logged in user
router.get("/myallposts", protectedRoute, (req, res) => {
  PostModel.find({ author: req.user._id })
    .populate("author", "_id fullName profileImg")
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((error) => {
      console.log(error);
    });
});
//Top 5 posts only from logged in user
router.get("/mytopposts", protectedRoute, (req, res) => {
  PostModel.find({ author: req.user._id })
    .sort({ productCost: -1 })
    .limit(5)
    //In sort method : 1 means asscending and -1 is desscending, and limit 5 means show only 5 outputs
    .populate("author", "_id fullName profileImg")
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((error) => {
      console.log(error);
    });
});
//Total revenue of  posts only from logged in user
router.get("/totalrevenue", protectedRoute, (req, res) => {
  PostModel.find({ author: req.user._id })
    .foreach((cost) => {
      totalcost += cost.productCost;
      res.status(200).json({ totalcost: totalcost });
    })
    .populate("author", "_id fullName profileImg")
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
