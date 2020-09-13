var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hello',
    header: 'This is the header',
    date: new Date(),
    quote: 'Quote of the day goes here.'
  });
});

module.exports = router;
