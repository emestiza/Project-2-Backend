const db = require('../db/connection.js')
const job = require('../models/job')
const user = require('../models/user') 

// define jobs to seed (with references to users already added)
const jobSeed = [
  {
    title: "3 Feet High and Rising",
    artist: "De La Soul",
    releaseYear: 1989,
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/DeLaSoul3FeetHighandRisingalbumcover.jpg/220px-DeLaSoul3FeetHighandRisingalbumcover.jpg'
  }
]

// add the job seed array with necessary awaits
const addJob = async () => {
  await Promise.all(userSeed.map(async jobToAdd => {

        // find user document with matching name
        let user = await user.findOne({fullname: jobToAdd.user})

        // update object with user ID
        jobToAdd.user = user._id

        // create job
        const job = await job.create(jobToAdd)
        console.log(job)

        await user.job.push(job._id)
        await user.save()
        console.log(user)
    }))

  db.close()

}

// invoke the async function
addJob()