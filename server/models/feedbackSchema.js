const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var feedbackSchema = mongoose.Schema({
  Name: { type: String, require: true },
  feedback: { type: String, require: true },
 
});

module.exports = mongoose.model("feedbacks", feedbackSchema);