var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/ci-hook', function(req, res) {
  res.json(req);
});

module.exports = router;
