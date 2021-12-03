module.exports = (app) => {
  const logEntry = require("../controllers/controller.js");
  const user = require("../controllers/userController.js");

  // Create a new Log Entry
  app.post("/logEntry", logEntry.create);

  // Retrieve a single Log Entry with log Id
  app.get("/logEntry/:logId", logEntry.findOne);

  // Update a Log Entry with log Id
  app.put("/logEntry/:logId", logEntry.update);

  // Delete a Log Entry with log Id
  app.delete("/logEntry/:logId", logEntry.delete);

  // Register a user
  app.post("/users", user.register);
};
