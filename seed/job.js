const db = require('../db/connection.js');
const job = require('../models/job.js');
const user = require('../models/user.js');
const mongoose = require("mongoose"); // require mongoose
const {Schema, model} = mongoose; // destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // url library

// define jobs to seed (with references to users already added)
const seed = [
  {
    "company": "Tesla",
    "position": "Software Engineer",
    "location": "Palo Alto, California",
    "date": "8/3/20",
    "phone": "N/A",
    "onsite": "N/A",
    "offer": "N/A",
    "url": "https://www.tesla.com/careers/job/software-engineerdataplatform-40000"
  },
  {
    "company": "Apple",
    "position": "Software Engineer",
    "location": "Santa Clara Valley (Cupertino), California",
    "date": "8/4/20",
    "phone": "N/A",
    "onsite": "N/A",
    "offer": "N/A",
    "url": "https://jobs.apple.com/en-us/details/200169548/software-engineer"
  }
]

module.exports  = seed
