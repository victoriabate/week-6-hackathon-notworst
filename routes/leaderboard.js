const Team = require(`../models/teams.js`), // uncomment for mongoose
      express = require(`express`),
      router = express.Router(),
      path = require('path');

router.get(`/`, (req, res, next) => {
  Team.find({},function(err,team){
    console.log(team);
    var t5 = team[0].teamName;
    var t4 = team[1].teamName;
    var t3 = team[2].teamName;
    var t2 = team[3].teamName;
    var t1 = team[4].teamName;
    var s5 = team[0].score;
    var s4 = team[1].score;
    var s3 = team[2].score;
    var s2 = team[3].score;
    var s1 = team[4].score;
    var m5 = team[0].members;
    var m4 = team[1].members;
    var m3 = team[2].members;
    var m2 = team[3].members;
    var m1 = team[4].members;
  res.render(`leaderboard`, {
    team1: t1,
    team2: t2,
    team3: t3,
    team4: t4,
    team5: t5,
    score1: s1,
    score2: s2,
    score3: s3,
    score4: s4,
    score5: s5,
    m1: m1,
    m2: m2,
    m3: m3,
    m4: m4,
    m5: m5
  })});
});

// router.get('/', function(req, res) {
//
//   Team.find({},function(err, docs) {
//     // res.render(`index`, {posts: docs});
//     res.send(docs)
//   });
// });

module.exports = router;
