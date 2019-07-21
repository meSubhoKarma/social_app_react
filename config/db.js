const mongoose = require("mongoose");
const config = require("config");
// db uri in default.json in this path
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("DB Connected...");
  } catch (err) {
    console.log(err.message);
    // exit process with fail
    process.exit(1);
  }
};

module.exports = connectDB;
