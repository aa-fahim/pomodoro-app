module.exports = (app) => {
  const user = require("../controllers/userController.js");

  // Register a user
  app.post("/users/register", user.register);

  // Find email of user
  app.get("/users/retrieve-username/:email", user.findUserName);

  app.post("/users/login", user.login);
};
