const mongoose = require("mongoose"); // require mongoose
const {Schema, model} = mongoose; // destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // url library

const jobSchema = new Schema(
  {
    "companyName": {type: String, required: true},
    "position": {type: String, required: true},
    "location": {type: String, required: true},
    "date": {type: String, required: false},
    "phone": {type: String, required: false},
    "onsite": {type: String, required: false},
    "offer": {type: String, required: false},
    "url": {type: mongoose.SchemaTypes.Url, required: true}
  },
  {timestamps: true}
);

const job = model("Job", jobSchema);
module.exports = job;