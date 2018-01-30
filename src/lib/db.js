// Bring Mongoose into the app
var mongoose = require('mongoose');

// Build the connection string
var dbURI = 'mongodb+srv://nmkulkarni007:Bhargav123@@cluster0-2us6w.mongodb.net/test';


// Create the database connection
mongoose.connect(dbURI);


// BRING IN YOUR SCHEMAS & MODELS
// For example
require('../models/team');