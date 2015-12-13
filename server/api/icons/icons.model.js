'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IconSchema = new Schema({
  name: String,
  image: String,
  installer: [{
    distro : String,
    type : String,
    setup : { }
  }]
});

module.exports = mongoose.model('Icon', IconSchema);
