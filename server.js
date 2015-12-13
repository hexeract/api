'use strict';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./server/config/environment');

mongoose.connect(config.mongo.uri.get(), config.mongo.options);

var app = express();

require('./server/router')(app);

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
