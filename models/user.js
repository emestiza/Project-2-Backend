const mongoose = require("mongoose"); // require mongoose
const {Schema, model} = mongoose; // destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // url library

const userSchema = new Schema(
  {
    "fullname": {type: String, required: true},
    "major": {type: String, required: false},
    "minor": {type: String, required: false},
    "linkedin": {type: mongoose.SchemaTypes.Url, required: false},
    "jobs": [{type: Schema.Types.ObjectId, ref: 'Job'}]
  },
  {timestamps: true}
);

const user = model("User", userSchema);
module.exports = user;
