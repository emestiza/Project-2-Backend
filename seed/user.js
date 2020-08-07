const db = require('../db/connection.js');
const user = require('../models/user.js');
const job = require('../models/job.js');
const mongoose = require("mongoose"); // Require mongoose
const {Schema, model} = mongoose; // Destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // Url library

// Define users to seed
const seed = [
  {
    "fullname": "Tim",
    "major": "Computer Science",
    "minor": "Math",
    "linkedin": "N/A",
    "jobs": []
  }
]

module.exports = seed