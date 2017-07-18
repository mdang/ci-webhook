var express = require('express');
var router = express.Router();

var Payload = require('../models/payload')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/ci-hook', function(req, res) {
  var newPayload = new Payload({
      body: req.body
  });

  // Save the user
  newPayload.save(function(err, payload) {
      if (err) console.log(err);

      res.json(req.body);
  });
});

module.exports = router;
