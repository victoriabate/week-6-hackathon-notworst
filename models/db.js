var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  score: Number,
  teams: [{ teamName: Schema.Types.ObjectId, ref: 'Team' }]
});

var teamSchema = Schema({
  teamName: { type: Schema.Types.ObjectId, ref: 'Member' },
  teamScore: Number,
  members: [{ type: Schema.Types.ObjectId, ref: 'Member' }]
});

var Team = mongoose.model('teams', memberSchema);
var Member = mongoose.model('members', teamSchema);

module.exports= Team, Member;
