/**
 * imports modules
 * - express: main framework
 * - mongodb: client connection to MongoDB
 * - cors: cross-origin resource sharing middleware
 */
const express = require('express');
const mongodb = require('../mongodb');
const cors = require('cors');

// creates a router object to handle HTTP requests
const router = express.Router();

// creates a list of whitelisted origins
const whitelist = [
  'https://scottlai.tech',
  'https://www.scottlai.tech',
  'http://localhost:3000'
];

// allows the server to serve origins in the whitelist only
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // callback(new Error(origin + ' not allowed by CORS'));
      callback(null, true);
    }
  }
};

/**
 * Route handler for the GET method on the /education endpoint
 * @param req - incoming request object
 * @param res - outgoing response object
 * @param next - next middleware function in the request-response cycle
 */
router.get('/', cors(corsOptions), async(req, res, next) => {
  // connects to the Homepage database in the MongoDB instance
  const db = mongodb.db('Homepage');
  // selects the Education collection in the database
  const education = db.collection('Education');
  // executes the query
  const data = await education.find().toArray();
  // sends the client a JSON response containing the resulting array
  res.json(data);
});

// exports the router object to be mounted to /education in app.js
module.exports = router;
