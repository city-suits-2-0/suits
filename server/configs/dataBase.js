var mongoose = require("mongoose");
var mongoUri = "mongodb+srv://Kassori:Icloud54845242@cluster0.s8tmo2f.mongodb.net/test";

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

module.exports = db;
