// connect my databsae
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.mongoDB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to mongoDB successfully!");
  } catch (error) {
    console.log("error connecting DB", error);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;
