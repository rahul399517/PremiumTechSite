const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ProductModel = require("../models/product_model");
const ProtectedRoute = require("../middleware/protectedResource");
//above we imported the middleware to check the user weather is logged in or not
//Add new Product API
router.post("/createproduct", ProtectedRoute, (req, res) => {
  const { ProductName, Category, Cost, Brand, Description, Image } = req.body;
  if (!ProductName || !Category || !Cost || !Brand || !Description || !Image) {
    return res.status(400).json({ error: "Enter all mandatory fields " });
  }
  req.user.Password = undefined;
  const ProductObj = new ProductModel({
    ProductName: ProductName,
    Category: Category,
    Cost: Cost,
    Brand: Brand,
    Description: Description,
    Image: Image,
    author: req.user,
  });
  ProductObj.save()
    .then((NewProduct) => {
      res.status(201).json({ Product: NewProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products API
router.get("/allproduct", (req, res) => {
  ProductModel.find() //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products Laptop API
var query1 = { Category: "Laptop" };
router.get("/laptop", (req, res) => {
  ProductModel.find(query1) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products watches API
var query2 = { Category: "Watch" };
router.get("/watch", (req, res) => {
  ProductModel.find(query2) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products Tablet API
var query3 = { Category: "Tablet" };
router.get("/tablet", (req, res) => {
  ProductModel.find(query3) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products SmartPhone API
var query4 = { Category: "SmartPhone" };
router.get("/smartphone", (req, res) => {
  ProductModel.find(query4) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products Ear Phone API
var query5 = { Category: "EarPhone" };
router.get("/earphone", (req, res) => {
  ProductModel.find(query5) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All Products Electronics API
var query6 = { Category: "Electronic" };
router.get("/electronics", (req, res) => {
  ProductModel.find(query6) //it will find all products
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ posts: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//All posts from Logged in seller API
router.get("/myallproduct", ProtectedRoute, (req, res) => {
  ProductModel.find({ author: req.user._id })
    .populate("author", "_id FullName ProfileImg")
    .then((dbProduct) => {
      res.status(200).json({ products: dbProduct });
    })
    .catch((error) => {
      console.log(error);
    });
});
//Delete Product API (by Owner of the Post)
router.delete("/deleteproduct/:productId", ProtectedRoute, (req, res) => {
  ProductModel.findOne({ _id: req.params.productId })
    .populate("author", "_id")
    //instead of .exec ,use .then method
    .then((error, productFound) => {
      if (error || !productFound) {
        return res.status(400).json({ error: "Product does not exist" });
      }
      //Check if the post author is same as logged in user , only then allow deletion
      if (productFound.author._id.toString() === req.user._id.toString()) {
        productFound
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
/*.exec((error, productFound) => {
      if (error || !productFound) {
        return res.status(400).json({ error: "Product do not exist " });
      }
      //check if the product author is same as logged in user only than allow deletion
      if (productFound.author._id.toString() === req.user._id.toString()) {
        productFound
          .remove()
          .then((data) => {
            res.status(200).json({ result: data });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });*/

//rest API for like the post
router.put("/like", ProtectedRoute, (req, res) => {
  ProductModel.findByIdAndUpdate(
    req.body.productId,
    { $push: { likes: req.user } }, //user._id
    { new: true }
  ) //return updated record
    .populate("author", "_id FullName")
    //instead of .exec ,use .them method
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({ error: error });
    });
  /* .exec((error, result) => {
      if (error) {
        return res.status(400).json({ error: error });
      } else {
        res.json(result);
      }
    });*/
});
//Rest API to Unlike the post
router.put("/unlike", ProtectedRoute, (req, res) => {
  ProductModel.findByIdAndUpdate(
    req.body.productId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ) //return updated record
    .populate("author", "_id FullName")
    //instead of .exec ,use .them method
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({ error: error });
    });
});
//To add Reviews Rest API
router.put("/review", ProtectedRoute, (req, res) => {
  const review = {
    reviewText: req.body.reviewText,
    reviewBy: req.user, // ************Can we use full name here ? ************IMPORTANT //user._id
  };
  ProductModel.findByIdAndUpdate(
    req.body.productId,
    {
      $push: { review: review },
    },
    { new: true }
  )
    .populate("review.reviewBy", "_id FullName")
    .populate("author", "_id FullName")
    //instead of .exec ,use .them method
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({ error: error });
    });
});
module.exports = router;
