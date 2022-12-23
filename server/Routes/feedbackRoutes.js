const express = require('express');
const feedback = express.Router();
const {addFeedback,allfeedbacks}= require('../controllers/feedbackController')

feedback.post("/add",addFeedback)
feedback.get("/all",allfeedbacks)

module.exports = feedback;