const sql = require("../config/users.db.js");

// constructor
const User = function (user) {
  this.userName = user.userName;
  this.email = user.email;
};

User.register = (newUser, result) => {
  //   sql.query("INSERT INTO logentries SET ?", newLogEntry, (err, res) => {
  //     if (err) {
  //       console.log("error: ", err);
  //       result(err, null);
  //       return;
  //     }

  //     console.log("created log entry: ", newLogEntry);
  //     result(null, newLogEntry);
  //   });

  console.log("successfully received user information");
  result(null, newUser);
};

module.exports = User;
