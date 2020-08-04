const user = require("../models/user.js");
// const seedData = require('../seed/user.js');

// INDEX - GET /user which will list out all users
const index = async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

// CREATE - POST /user which will add a new user and return a list of all users
const create = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// UPDATE - PUT user/:userId which will update a user and redirect to the list of all users
const update = async (req, res) => {
  try {
    const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// DESTROY - DELETE user/:userId which will delete a user and redirect to the list of all users
const destroy = async (req, res) => {
  try {
    const deleteUser = await user.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Seed Data
// const seed = async (req,res) => {
//   res.json(await user.create(seedData))
// }

module.exports = {
  index,
  create,
  update,
  destroy
};