const mongoose = require("mongoose"); // Require mongoose
const {Schema, model} = mongoose; // Destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // Url library

const jobSchema = new Schema(
  {
    "company": {type: String, required: false},
    "position": {type: String, required: false},
    "location": {type: String, required: false},
    "date": {type: String, required: false},
    "phone": {type: String, required: false},
    "onsite": {type: String, required: false},
    "offer": {type: String, required: false}
  },
  {timestamps: true}
);

const job = model("Job", jobSchema);
module.exports = job;