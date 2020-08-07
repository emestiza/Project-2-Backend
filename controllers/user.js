const user = require("../models/user.js");
const seed = require("../seed/user.js");

// Index - Get
const index = async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Create - Post
const create = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update - Put
const update = async (req, res) => {
  try {
    const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Destroy - Delete
const destroy = async (req, res) => {
  try {
    const deleteUser = await user.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Seed Data
const userSeed = async (req, res) => {
  res.json(await user.create(seed))
}

module.exports = {
  index,
  create,
  update,
  destroy,
  userSeed
};