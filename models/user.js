const mongoose = require("mongoose"); // Require mongoose
const {Schema, model} = mongoose; // Restructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // Url library

const userSchema = new Schema(
  {
    "fullname": {type: String, required: false},
    "major": {type: String, required: false},
    "minor": {type: String, required: false},
    "linkedin": {type: mongoose.SchemaTypes.Url, required: false},
    "jobs": [{type: Schema.Types.ObjectId, ref: 'Job'}]
  },
  {timestamps: true}
);

const user = model("User", userSchema);
module.exports = user;
