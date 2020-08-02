const express = require("express");
const userRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/user.js");

// Routes specific to this router
// get all users
userRouter.get("/", index);

// create new user
userRouter.post("/", create);

// update user
userRouter.put("/:id", update);

// destroy user
userRouter.delete("/:id", destroy);

module.exports = userRouter;