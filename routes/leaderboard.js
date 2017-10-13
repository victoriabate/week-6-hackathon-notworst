const Team = require(`../models/teams.js`), // uncomment for mongoose
      express = require(`express`),
      router = express.Router(),
      path = require('path');

/* GET users listing. */
router.get(`/`, (req, res, next) => {
  res.sendFile(path.join(__dirname,'../views/index.html'));
});

// router.get('/', function(req, res) {
//
//   Team.find({},function(err, docs) {
//     // res.render(`index`, {posts: docs});
//     res.send(docs)
//   });
// });

module.exports = router;
