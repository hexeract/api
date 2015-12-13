'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 1337,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session
  secrets: {
    session: 'demo-secret'
  },

  // List of user roles
  userRoles: [],

  // MongoDB connection options
  mongo: {
    uri:{
      get : function() {
        return 'mongodb://' + this.user + ':' + this.pass + '@' + this.host + ':' + this.port + '/' + this.name ;
      },
      host: 'ds027385.mongolab.com',
      port: '27385',
      user: 'hexeract',
      pass: 'Delorean.1',
      name: 'hexeract'
    },
    options: {}
  }
};


// Export the config object based on the NODE_ENV
// ==============================================
var config = all;
if(process.env.NODE_ENV)
  config = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});

module.exports = config;
