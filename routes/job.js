const express = require("express");
const jobRouter = express.Router();
const {index, create, update, destroy, jobSeed} = require("../controllers/job.js");

// Routes specific to this router
// Get all jobs
jobRouter.get("/", index);

// Create new job
jobRouter.post("/", create);

// Update job
jobRouter.put("/:id", update);

// Destroy job
jobRouter.delete("/:id", destroy);

// Seed data
jobRouter.get("/seed", jobSeed);

module.exports = jobRouter;