const User = require("../models/userModel.js");

// Register and create a new User
exports.register = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a new user
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
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
