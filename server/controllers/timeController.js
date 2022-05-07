const Time = require("../models/timeModel.js");
const mongoDb = require("../config/mongodb");

exports.createDocument = (userId) => {
  const newTimeDocument = new Time({
    userId,
    timeSpentStudying: 0,
  });
};
