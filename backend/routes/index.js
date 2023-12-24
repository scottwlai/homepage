/**
 * imports modules
 * - express: main framework
 */
const express = require('express');

// creates a router object to handle HTTP requests
const router = express.Router();

/**
 * Route handler for the GET method on the / endpoint
 * @param req - incoming request object
 * @param res - outgoing response object
 * @param next - next middleware function in the request-response cycle
 */
router.get('/', function(req, res, next) {
  // renders the view template index using the given parameters
  res.render('index', { title: 'Homepage API' });
});

// exports the router object to be mounted to / in app.js
module.exports = router;
