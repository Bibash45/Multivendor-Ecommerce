const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("2. Database connected");
  } catch (error) {
    console.log(error.message);
  }
};
