var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home page' });
});
router.get('/budget', function(req, res, next) {
  res.render('index', { title: 'budget page' });
});
router.get('/expenses', function(req, res, next) {
  res.render('index', { title: 'expenses page' });
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login page' });
});

module.exports = router;
