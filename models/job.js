const mongoose = require("mongoose"); // require mongoose
const {Schema, model} = mongoose; // destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // url library

const jobSchema = new Schema(
  {
    "companyName": {type: String, required: true},
    "position": {type: String, required: true},
    "location": {type: String, required: true},
    "jobUrl": {type: mongoose.SchemaTypes.Url, required: true}
  },
  {timestamps: true}
);

const job = model("Job", jobSchema);
module.exports = job;