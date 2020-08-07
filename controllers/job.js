const job = require("../models/job.js");
const seed = require("../seed/job.js");

// Index - Get
const index = async (req, res) => {
  try {
    const allJobs = await job.find({});
    console.log(allJobs)
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Create - Post
const create = async (req, res) => {
  try {
    const newJob = await job.create(req.body);
    res.status(200).json(newJob);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update - Put
const update = async (req, res) => {
  try {
    const updateJob = await job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Destroy - Delete
const destroy = async (req, res) => {
  console.log(req.params.id)
  try {
    const deleteJob = await job.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteJob);
  } catch (error) {
    res.status(400).send(error);
    console.log(error)
  }
};

// Seed Data
const jobSeed = async (req, res) => {
  res.json(await job.create(seed))
}

module.exports = {
  index,
  create,
  update,
  destroy,
  jobSeed
};