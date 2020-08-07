const express = require("express");
const userRouter = express.Router();
const {index, create, update, destroy, userSeed} = require("../controllers/user.js");

// Routes specific to this router
// Get all users
userRouter.get("/", index);

// Create new user
userRouter.post("/", create);

// Update user
userRouter.put("/:id", update);

// Destroy user
userRouter.delete("/:id", destroy);

// Seed data
userRouter.get("/seed", userSeed);

module.exports = userRouter;