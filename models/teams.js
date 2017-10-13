const mongoose = require("mongoose");


var teamSchema = {
  "teamName": String,
  "score": Number,
  "members": Array
  };

var Team = mongoose.model('teams', teamSchema);

module.exports = Team;
