// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = connectDb;

const mongoose = require("mongoose");
const express = require("express");

const app = express();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
