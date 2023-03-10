const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const CartSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  Cost: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  author: {
    type: ObjectId,
    Ref: "UserModel",
  },
});
const CartModel = mongoose.model("CartModel", CartSchema);
module.exports = CartModel;
