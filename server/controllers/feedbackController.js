const feedbacks = require("../models/feedbackSchema");

const mongodb = require('mongodb');
exports.addFeedback  = function (req, res) {
    feedbacks.create(req.body,(err,result)=>{
          console.log(err)
          
              
              res.json(result)
      })
  }

  exports.allfeedbacks = async (req, res) => {
    try {
      const allfeedbacks = await feedbacks.find({});
  
      res.status(200).json({ allfeedbacks });
    } catch (error) {
      res.status(500).send(error);
    }
  };
// const addFeedback = async(req, res) => {
//   const { name, message } = req.body;

//   try {
//     const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
//     const client = mongodb.MongoClient;
//     const dbName = 'test';

//     const connection = await client.connect(uri, { useNewUrlParser: true });
//     const db = connection.db(dbName);
//     const feedback = { name, message };
//     const result = await db.insertOne(feedback);
//     connection.close();
//     res.send({ success: true });
//   } catch (error) {
//     console.log(error);
//     res.send({ success: false, error: error.message });
//   }


// module.exports = {

//     allfeedbacks,
//   };