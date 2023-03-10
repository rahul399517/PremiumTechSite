const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const mongoose = require("mongoose"); //To check the data base
const SellerModel = mongoose.model("SellerModel");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //the header now have somthing like "Bearer kjb;gjkb;bdb(random token)"
  if (!authorization) {
    return res.status(401).json({ error: "User is not loggedIn" });
  }
  //now through else case we will try to get only random token and not "Bearer and space"
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: "User not  Logged In" });
    }
    const { _id } = payload;
    SellerModel.findById(_id).then((dbUser) => {
      req.user = dbUser;
      next(); //goes to next middleware (if present) or goes to Rest API end point
      //default expire time of jwt token is 20 min
    });
  });
};
