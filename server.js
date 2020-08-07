// Dependencies
require("dotenv").config(); //reads .env file environmental variables
const express = require("express"); //brings in Express Library
const app = express(); //creates express application object
const morgan = require("morgan"); //brings in Morgan Library
const cors = require("cors"); //brings in CORS library
const mongoose = require("mongoose"); //bring in mongoose library
const jobRouter = require("./routes/job.js"); //bring in job Router
const userRouter = require("./routes/user.js"); //bring in user Router

// Global Variables
const PORT = process.env.PORT; //port number for server as defined in environment variables
const NODE_ENV = process.env.NODE_ENV; //"development" or "production"
const mongoURI = process.env.mongoURI + "project2"; //URI for connecting to database specified in .env
const db = mongoose.connection; //the mongoose connection object
const mongoConfigObject = {useNewUrlParser: true, useUnifiedTopology: true}; //Config option to eliminate deprecation warnings

// Connect to Database
mongoose.connect(mongoURI, mongoConfigObject, () => {
  console.log("CONNECTED TO MONGO");
});

// Connection Messages
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Cors security configuration
const whitelist = ["http://localhost:3000/", "https://job-tracker-em.netlify.app"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};

// Middleware
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions)); //ternary operator
// Enables websites in whitelist to make API calls to your server, enables all sites in development
app.use(express.json()); //Turns JSON from post/put/patch requests and converts them into req.body object
app.use(morgan("dev")); // Enables Morgan logging, creating more useful terminal logs while server runs
app.use(express.static("public")); //Allows static serving of files from public folder

// Routes and Routers
app.use("/job", jobRouter); //Connect Router to URL ending in /job
app.use("/user", userRouter); //Connect Router to URL ending in /user


// Root Route
app.get("/", (req, res) => {
  res.send("If you see this then the server is working!");
});

// Server Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
