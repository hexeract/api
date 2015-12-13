/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /themes              ->  index
 * POST    /themes              ->  create
 * GET     /themes/:id          ->  show
 * PUT     /themes/:id          ->  update
 * DELETE  /themes/:id          ->  destroy
 */

'use strict';

var Themes = require('./themes.model');

// Get list of themes
exports.index = function(req, res) {
  Themes.find(function (err, themes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({ data: themes  });
  });
};
