'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
  name: String,
  description: String,
  icon: String,
  installer: [{
    distro : String,
    type : String,
    setup : { }
  }]
});

module.exports = mongoose.model('App', AppSchema);
