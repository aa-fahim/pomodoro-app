const mongoose = require("mongoose");

// connect to mongodb
exports.connectMongoDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDb: ", err.message);
    });
};

exports.disconnect = () => {
  mongoose.connection.close();
};
