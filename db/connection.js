const mongoose = require('mongoose');

// use environment URI if available
let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://localhost:27017/PROJECT-2-BACKEND'

// connect to database
mongoose
    .connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    .catch(event => {
        console.error('Connection error:', event.message)
    })

const db = mongoose.connection;

// connection messaging
db.on("error", (error) => console.log(error.message + "\nIs Mongod not running?"));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

module.exports = db;