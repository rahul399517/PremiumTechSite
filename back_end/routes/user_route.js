const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const UserModel = require("../models/user_model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
//signup API
router.post("/signup", (req, res) => {
  const {
    FullName,
    Email,
    Password,
    ProfileImg,
    City,
    HomeAddress,
    State,
    Country,
    Pin,
  } = req.body;
  UserModel.findOne({ Email: Email })
    .then((UserInDb) => {
      if (UserInDb) {
        return res.status(500).json({ error: "User with email alredy exist " });
      }
      bcryptjs
        .hash(Password, 16)
        .then((hashedPassword) => {
          const user = new UserModel({
            FullName,
            Email,
            Password: hashedPassword,
            ProfileImg,
            City,
            HomeAddress,
            State,
            Country,
            Pin,
          });
          user
            .save()
            .then((NewUser) => {
              res.status(201).json({ result: "User signedup seccessfully" });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
//Login API
router.post("/login", (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ error: "Please enter mandatory fields" });
  }
  UserModel.findOne({ Email: Email })
    .then((UserInDb) => {
      if (!UserInDb) {
        return res.status(401).json({ error: "Invalid Credentials" });
      }
      bcryptjs
        .compare(Password, UserInDb.Password)
        .then((DidMatch) => {
          if (DidMatch) {
            const JwtToken = jwt.sign({ _id: UserInDb._id }, JWT_SECRET);
            const UserInfo = {
              _id: UserInDb._id,
              Email: UserInDb.Email,
              FullName: UserInDb.FullName,
              ProfileImg: UserInDb.ProfileImg,
              City: UserInDb.City,
              HomeAddress: UserInDb.HomeAddress,
              State: UserInDb.State,
              Country: UserInDb.Country,
              Pin: UserInDb.Pin,
            };

            // res.status(200).json({ result: "User LOggedIn successfully" });
            res
              .status(200)
              .json({ result: { token: JwtToken, user: UserInfo } });
          } else {
            return res.status(401).json({ error: "Invalid Credentials" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
//update user info REst API
router.get("/updatedata/:id", async (req, res) => {
  let result = await UserModel.findOne({ _id: req.params._id });
});
module.exports = router;
