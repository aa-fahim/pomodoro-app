const mongoose = require("mongoose");

// schema
const timeSchema = new mongoose.Schema({
  userId: String,
  timeSpentStudying: Number,
});

const Time = mongoose.model("Time", timeSchema);

Time.createDocument = (timeDocument, result) => {
  const timeDocument = {
    userId,
    timeSpentStudying: 0,
  }

  timeDocument.save().then(res => {
    console.log("Time was successfully save.");
    mongoose.connection.close();
    result(null, timeDocument);
  }).catch(err => {
    console.log("Error creating new time: ", err);
    result(err, null);
  });
};

Time.updateTime = (timeToAdd: number) => {

}

module.exports = Time;