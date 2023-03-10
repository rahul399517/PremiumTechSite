const express = require("express");
const app = express();
const cors = require("cors"); //it is a middleware ,act as a string berween frontend and backend
const mongoose = require("mongoose");
const UserRoute = require("./routes/user_route");
const SellerRoute = require("./routes/seller_route");
const ProductRoute = require("./routes/product_route");
const FileRoute = require("./routes/file_route");
const { MONGODB_URL } = require("./config");
global.__basedir = __dirname;
mongoose.set("strictQuery", true);
//setting up the connection with the database
mongoose.connect(MONGODB_URL);
mongoose.connection.on("connected", () => {
  console.log("Database is connected ");
});
mongoose.connection.on("error", (error) => {
  console.log("DataBase connection failed");
});
app.use(cors());
app.use(express.json()); //it will get the data in json format
app.use("/", UserRoute); //for buyer login and signup
app.use("/", SellerRoute); //for seller login and signup
app.use("/", ProductRoute); //for product upload
app.use("/", FileRoute); //for uploading the file and download the file
app.listen(4000, () => {
  console.log("Termional started at Port : 4000");
});
