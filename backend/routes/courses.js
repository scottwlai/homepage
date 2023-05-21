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
corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(origin + ' not allowed by CORS'));
      // callback(null, true);
    }
  }
};

/**
 * Route handler for the GET method on the /courses endpoint
 * @param req - incoming request object
 * @param res - outgoing response object
 * @param next - next middleware function in the request-response cycle
 */
router.get('/', cors(corsOptions), async(req, res, next) => {
  // connects to the Homepage database in the MongoDB instance
  const db = mongodb.db('Homepage');
  // parses URL query parameters, setting default values if null
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 5;
  // calculates the number of entries to skip ahead to simulate pages
  const skip = (page - 1) * perPage;
  const data = await db.collection('Courses').find().skip(skip).limit(perPage).toArray();
  // sends the resulting array as a JSON response to the client
  res.json({
    "courses": data,
    "page": page,
    "pageSize": perPage,
    "total": 26
  });
});

// exports the router object to be mounted to /courses in app.js
module.exports = router;
