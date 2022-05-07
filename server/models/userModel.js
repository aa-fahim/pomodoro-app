const mongoose = require("mongoose");
const express = require("express");
const { Request, Response } = express;

const mongoDb = require("../config/mongodb");

// schema
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

User.register = (newUser, result) => {
  newUser
    .save()
    .then((res) => {
      console.log("User was successfully saved.");
      mongoose.connection.close();
      result(null, newUser);
    })
    .catch((err) => {
      console.log("Error creating new user: ", err);
      result(err, null);
    });
};

User.findUserName = (email, result) => {
  User.find({ email: email })
    .then((res) => {
      console.log("Successfully found username.");
      mongoose.connection.close();
      result(null, res);
    })
    .catch((err) => {
      console.log("Error finding username with an account email of: ", email);
      result(err, null);
    });
};

User.doesUserNameExist = async (userName) => {
  await mongoDb.connectMongoDb();
  const res = await User.find({ userName: userName });
  mongoose.connection.close();
  if (!res || res.length > 0) return true;
  return false;
};

User.doesEmailExist = async (email) => {
  await mongoDb.connectMongoDb();
  const res = await User.find({ email: email });
  mongoose.connection.close();
  if (!res || res.length > 0) return true;
  return false;
};

User.retrieveAccountByUserName = async (userName, result) => {
  await mongoDb.connectMongoDb();

  User.find({ userName: userName })
    .limit(1)
    .then((res) => {
      console.log("Successfully found account.");
      mongoose.connection.close();
      result(null, res[0]);
    })
    .catch((err) => {
      console.log("Error finding account with an username: ", userName);
      result(err, null);
    });
};

module.exports = User;
