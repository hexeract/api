'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThemeSchema = new Schema({
  name: String,
  image: String,
  installer: [{
    distro : String,
    type : String,
    setup : { }
  }]
});

module.exports = mongoose.model('Theme', ThemeSchema);
