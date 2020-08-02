const db = require('../db')
const user = require('../models/user')

// define users to seed
const userSeed = [
  {
    "fullname": "Erick Silver",
    "major": "Computer Science",
    "minor": "Math",
    "linkedin": "N/A",
    "phone": "N/A",
    "onsite": "N/A",
    "rejected": "N/A",
    "job": [{type: Schema.Types.ObjectId, ref: 'Job'}]
  }
]

// insert all users from array
user.insertMany(userSeed,
  (error, response) => {
      if (error) {
          console.log(error);
      } else {
          console.log(response);
      }
      db.close()
})