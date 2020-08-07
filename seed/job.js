const db = require('../db/connection.js');
const job = require('../models/job.js');
const user = require('../models/user.js');
const mongoose = require("mongoose"); // Require mongoose
const {Schema, model} = mongoose; // Restructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // Url library

// Define jobs to seed
const seed = [
  {
    "company": "Tesla",
    "position": "Software Engineer",
    "location": "Palo Alto, California",
    "date": "8/3/20",
    "phone": "N/A",
    "onsite": "N/A",
    "offer": "N/A"
  },
  {
    "company": "Apple",
    "position": "Software Engineer",
    "location": "Santa Clara Valley, California",
    "date": "8/4/20",
    "phone": "N/A",
    "onsite": "N/A",
    "offer": "N/A"
  }
]

module.exports = seed
