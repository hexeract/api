/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /apps              ->  index
 * POST    /apps              ->  create
 * GET     /apps/:id          ->  show
 * PUT     /apps/:id          ->  update
 * DELETE  /apps/:id          ->  destroy
 */

'use strict';

var Apps = require('./apps.model');

// Get list of applications
exports.index = function(req, res) {
  Apps.find(function (err, apps) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({ data: apps });
  });
};
