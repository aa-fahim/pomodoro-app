const mongoose = require("mongoose");
const mongoDb = require("../config/mongodb");

// schema
const timeStatsSchema = new mongoose.Schema({
  userName: String,
  studyingTime: [
    {
      date: Date,
      timeSpentStudying: Number,
    },
  ],
});

const TimeStats = mongoose.model("Time Stats", timeStatsSchema);

TimeStats.createDocument = async (userName, result) => {
  const initialTimeStats = {
    userName,
    timeSpentStudying: [],
  };

  await mongoDb.connectMongoDb();
  initialTimeStats
    .save()
    .then((res) => {
      console.log("Time was successfully save.");
      mongoose.connection.close();
      result(null, res);
    })
    .catch((err) => {
      console.log("Error creating new time: ", err);
      result(err, null);
    });
  mongoose.connection.close();
};

TimeStats.updateTime = (timeToAdd) => {};

module.exports = TimeStats;
