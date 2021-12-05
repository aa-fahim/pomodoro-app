const mongoose = require("mongoose");

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
  const res = await User.find({ userName: userName });
  if (!res || res.length > 0) return true;
  return false;
};

User.doesEmailExist = async (email) => {
  const res = await User.find({ email: email });
  if (!res || res.length > 0) return true;
  return false;
};

module.exports = User;
