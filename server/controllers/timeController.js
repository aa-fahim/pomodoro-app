const TimeStats = require("../models/timeModel.js");

exports.createDocument = (userName, result) => {
  const timeStats = new TimeStats({
    userName,
    timeSpentStudying: [],
  });

  TimeStats.createDocument(timeStats, (err, data) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, data);
  });
};
