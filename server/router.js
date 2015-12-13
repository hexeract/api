'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/apps', require('./api/apps'));
  app.use('/api/icons', require('./api/icons'));
  app.use('/api/scripts', require('./api/scripts'));
  app.use('/api/themes', require('./api/themes'));

  // All undefined asset or api routes should return a 404
  /*app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);*/

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.status(404)
      .json({
        error: {
          number: 404,
          status: 'Not found'
        }
      })
    });
};
