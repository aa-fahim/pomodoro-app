const User = require("../models/userModel.js");
const mongoDb = require("../config/mongodb");
const { hashString, compareStrings } = require("../util/bcrypt-hash");
const express = require("express");
const { Request, Response } = express;

// Register and create a new User
exports.register = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (!req.body?.userName || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Invalid request body",
    });
  }

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

  // Hash password
  const hashedPassword = await hashString(req.body.password);

  // Create a new user
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
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
exports.findUserName = async (req, res) => {
  if (!req.params.email) {
    res.status(400).send({
      message: "No email provided in request body",
    });
  }

  await mongoDb.connectMongoDb();

  User.findUserName(req.params.email, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while finding the user.",
      });
    } else res.send(data);
  });
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
  }

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (!userName || !password) {
    res.status(400).send({
      message: "Invalid request body",
    });
  }

  User.retrieveAccountByUserName(userName, async (err, account) => {
    if (err) {
      res.status(400).send({
        message:
          err.message || `No account found with the username of ${userName}`,
      });
      return;
    }

    const passwordsMatch = await compareStrings(password, account.password);

    if (!passwordsMatch) {
      res.status(400).send({
        message: `Password is incorrect`,
      });
    } else {
      res.send("Succesfully logged in!");
    }
  });
};
