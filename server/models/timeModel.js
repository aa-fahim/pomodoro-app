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

TimeStats.createDocument = async (timeStats, result) => {
  await mongoDb.connectMongoDb();
  timeStats
    .save()
    .then((res) => {
      console.log("Time was successfully saved.");
      mongoose.connection.close();
      result(null, res);
    })
    .catch((err) => {
      console.log("Error creating new time: ", err);
      mongoose.connection.close();
      result(err, null);
    });
};

TimeStats.updateTime = (timeStats) => {};

module.exports = TimeStats;
