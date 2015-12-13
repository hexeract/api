/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /scripts              ->  index
 * POST    /scripts              ->  create
 * GET     /scripts/:id          ->  show
 * PUT     /scripts/:id          ->  update
 * DELETE  /scripts/:id          ->  destroy
 */

'use strict';

var Scripts = require('./scripts.model');

// Get list of scripts
exports.index = function(req, res) {
  Scripts.find(function (err, scripts) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({ data: scripts  });
  });
};
