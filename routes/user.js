const express = require("express");
const userRouter = express.Router();
const {index, create, update, destroy, userSeed} = require("../controllers/user.js");

// Routes specific to this router
// get all users
userRouter.get("/", index);

// create new user
userRouter.post("/", create);

// update user
userRouter.put("/:id", update);

// destroy user
userRouter.delete("/:id", destroy);

// seed job data
userRouter.get("/seed", userSeed);

module.exports = userRouter;