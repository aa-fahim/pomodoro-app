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

User.register = async (newUser, result) => {
  await mongoDb.connectMongoDb();
  newUser
    .save()
    .then((res) => {
      console.log("User was successfully saved.");
      mongoose.connection.close();
      result(null, newUser);
    })
    .catch((err) => {
      console.log("Error creating new user: ", err);
      mongoose.connection.close();
      result(err, null);
    });
};

User.findUserName = async (email, result) => {
  await mongoDb.connectMongoDb();

  try {
    const resp = await User.findOne({ email: email });
    result(null, resp);
  } catch (error) {
    console.log(`Error finding username with an account email of ${email}`);
    result(error, null);
  }

  mongoose.connection.close();
};

User.doesUserNameExist = async (userName) => {
  await mongoDb.connectMongoDb();
  let res;

  try {
    res = await User.findOne({ userName: userName });
  } catch (error) {
    console.log(
      `Unable to find user with username of ${userName}, error: ${error}`
    );
  }

  mongoose.connection.close();

  if (!res) return true;
  return false;
};

User.doesEmailExist = async (email) => {
  await mongoDb.connectMongoDb();
  let res;
  try {
    res = await User.findOne({ email: email });
  } catch (error) {
    console.log(`Unable to find user with email of ${email}, error: ${error}`);
  }
  mongoose.connection.close();
  if (!res) return true;
  return false;
};

User.retrieveAccountByUserName = async (userName, result) => {
  await mongoDb.connectMongoDb();
  try {
    const resp = User.findOne({ userName: userName });
    result(null, resp);
  } catch (error) {
    console.log("Error finding account with an username: ", userName);
    result(error, null);
  }
  mongoose.connection.close();
};

module.exports = User;
