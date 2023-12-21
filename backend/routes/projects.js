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
 * Route handler for the GET method on the /projects endpoint
 * @param req - incoming request object
 * @param res - outgoing response object
 * @param next - next middleware function in the request-response cycle
 */
router.get('/', cors(corsOptions), async(req, res, next) => {
  // connects to the Homepage database in the MongoDB instance
  const db = mongodb.db('Homepage');
  // selects the Project collection in the database
  const projects = db.collection('Projects');
  // get the URL query parameters
  const query = req.query;
  // get the total number of documents in the collection
  const total = await projects.countDocuments();
  // sets the limit if it exists, otherwise sets it to the total number of documents
  const limit = parseInt(query.limit) || total;
  // executes the query
  const data = await projects.find({}, { sort: { endDate: -1 } }).limit(limit).toArray();
  // sends the client a JSON response containing the resulting array
  res.json(data);
});

// exports the router object to be mounted to /projects in app.js
module.exports = router;
