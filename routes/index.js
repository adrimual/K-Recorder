var express = require('express');
var router = express.Router();
let Song = require('../models/song');

/* GET home page. */

router.get('/index', function (req, res, next) {
  Song.find()
    .then(songs => {
      res.render('index', { songs })
    })
  
  .catch (err => {
    console.log(err)
  })
});

module.exports = router;
