const job = require("../models/job.js");
const seed = require("../seed/job.js");

// INDEX - GET /job which will list out all job
const index = async (req, res) => {
  try {
    const allJobs = await job.find({});
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(400).send(error);
  }
};

// CREATE - POST /job which will add a new job and return a list of all jobs
const create = async (req, res) => {
  try {
    const newJob = await job.create(req.body);
    res.status(200).json(newJob);
  } catch (error) {
    res.status(400).send(error);
  }
};

// UPDATE - PUT job/:jobId which will update a job and redirect to the list of all job
const update = async (req, res) => {
  try {
    const updateJob = await job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(400).send(error);
  }
};

// DESTROY - DELETE job/:jobId which will delete a job and redirect to the list of all jobs
const destroy = async (req, res) => {
  try {
    const deleteJob = await job.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteJob);
  } catch (error) {
    res.status(400).send(error);
  }
};

// SEED DATA
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