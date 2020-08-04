const express = require("express");
const jobRouter = express.Router();
const {index, create, update, destroy, jobSeed} = require("../controllers/job.js");

// Routes specific to this router
// get all jobs
jobRouter.get("/", index);

// create new job
jobRouter.post("/", create);

// update job
jobRouter.put("/:id", update);

// destroy job
jobRouter.delete("/:id", destroy);

// seed job data
jobRouter.get("/seed", jobSeed);

module.exports = jobRouter;