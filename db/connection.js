const mongoose = require('mongoose')

// mongoose connection with mongoDB name and mongoose config
mongoose.connect('mongodb://localhost/project2', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Promise = Promise

module.exports = mongoose