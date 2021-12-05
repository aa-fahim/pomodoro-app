const User = require("../models/userModel.js");
const mongoDb = require("../config/mongodb");

// Register and create a new User
exports.register = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (!req.body.userName || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Invalid request body",
    });
  }

  await mongoDb.connectMongoDb();

  // Check for duplicate users
  const doesUserNameExist = await User.doesUserNameExist(req.body.userName);
  if (doesUserNameExist) {
    res.status(400).send({
      message: `Account already exists with username of ${req.body.userName}`,
    });
  }
  const doesEmailExist = await User.doesEmailExist(req.body.email);
  if (doesEmailExist) {
    res.status(400).send({
      message: `Account already exists with email of ${req.body.email}`,
    });
  }

  // Create a new user
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  User.register(newUser, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.send(data);
  });
};

// Find user
exports.findUserName = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "No email provided in request body",
    });
  }

  User.findUserName(req.body.email, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while finding the user.",
      });
    } else res.send(data);
  });
};
