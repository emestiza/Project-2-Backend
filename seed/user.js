const db = require('../db/connection.js');
const user = require('../models/user.js');
const job = require('../models/job.js');
const mongoose = require("mongoose"); // require mongoose
const {Schema, model} = mongoose; // destructure Schema and model from mongoose
const urls = require("mongoose-type-url"); // url library

// define users to seed
const seed = [
  {
    "fullname": "Tim",
    "major": "Computer Science",
    "minor": "Math",
    "linkedin": "N/A",
    "jobs": []
  }
]

module.exports  = seed

// insert all users from array
// user.insertMany(userSeed,
//   (error, response) => {
//       if (error) {
//           console.log(error);
//       } else {
//           console.log(response);
//       }
//       db.close()
// })

// async function to execute when file is run in Node
// const run = async () => {
    
//   // clears collection for re-seed
//   const emptyCollection = await user.deleteMany({})
//   console.log(emptyCollection)

//   // inserts from gifSeed array
//   const result = await user.insertMany(userSeed)
//   console.log(result)

//   db.connection.close()

// }

// run() // execute!