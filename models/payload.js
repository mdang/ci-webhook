var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  body: Object
});

var Payload = mongoose.model('Payload', schema);

// Make this available to our other files
module.exports = Payload;
