/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /icons              ->  index
 * POST    /icons              ->  create
 * GET     /icons/:id          ->  show
 * PUT     /icons/:id          ->  update
 * DELETE  /icons/:id          ->  destroy
 */

'use strict';

var Icons = require('./icons.model');

// Get list of icons
exports.index = function(req, res) {
  Icons.find(function (err, icons) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({ data: icons });
  });
};
