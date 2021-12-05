const sql = require("../config/users.db.js");
const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
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

module.exports = User;
