'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* Force an artificial 500 error. */
router.get('/givemea500', function(req, res, next) {
  var err = new Error('500 Not Found');
  err.status = 500;
  next(err);
});

module.exports = router;
