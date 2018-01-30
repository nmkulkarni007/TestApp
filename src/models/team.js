var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
    Country: String,
    GroupName: String,
    CreatedOn: Date
});

export const Team = mongoose.model('Team', teamSchema);