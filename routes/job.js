const express = require("express");
const jobRouter = express.Router();
const {index, create, update, destroy} = require("../controllers/job.js");

// Routes specific to this router
// get all jobs
jobRouter.get("/", index);

// create new job
jobRouter.post("/", create);

// update job
jobRouter.put("/:id", update);

// destroy job
jobRouter.delete("/:id", destroy);

module.exports = jobRouter;