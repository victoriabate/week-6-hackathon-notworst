// const Post = require(`../models/posts.js`); // uncomment for mongoose
const express = require(`express`);
const router = express.Router();

/* GET users listing. */
router.get(`/`, (req, res, next) => {
  res.send(`respond with a resource`);
});

module.exports = router;
