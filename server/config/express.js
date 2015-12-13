/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');
var mongoose = require('mongoose');

module.exports = function(app) {
  var env = app.get('env');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  app.use(express.static(path.join(config.root, 'public')));
  app.set('appPath', config.root + '/public');

};
