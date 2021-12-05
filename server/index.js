const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors());

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb: ", err.messag);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Fahim's Pomodoro mobile application." });
});

// import routes
require("./routes/routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
