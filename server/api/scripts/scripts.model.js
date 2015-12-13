'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ScriptSchema = new Schema({
  name: String,
  autor: {
    name: String
  },
  color: String,
  description : String,
  installer: [{
    distro : String,
    type : String,
    setup : { }
  }]
});

module.exports = mongoose.model('Script', ScriptSchema);
