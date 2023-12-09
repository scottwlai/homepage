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

const departmentTranslator = {
  "CS": "C S",
  "MAN": "MAN",
  "MIS": "MIS",
  "ACC": "ACC",
  "ANS": "ANS",
  "LEB": "LEB",
  "CH": "CH",
  "M": "M",
  "HIS": "HIS",
  "SDS": "SDS",
  "MUS": "MUS",
  "GOV": "GOV",
  "UGS": "UGS"
};

const termTranslator = {
  "f20": {
    "semester": "Fall",
    "year": 2020
  },
  "s21": {
    "semester": "Spring",
    "year": 2021
  },
  "f21": {
    "semester": "Fall",
    "year": 2021
  },
  "s22": {
    "semester": "Spring",
    "year": 2022
  },
  "f22": {
    "semester": "Fall",
    "year": 2022
  },
  "s23": {
    "semester": "Spring",
    "year": 2023
  }
};

const gradeArray = ["B-", "B", "B+", "A-", "A"];

const gradeTranslator = {
  "Bminus": "B-",
  "B": "B",
  "Bplus": "B+",
  "Aminus": "A-",
  "A": "A"
};

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
 * 
 * @param select - inital selection
 * @param parameter - query parameter
 * @param translator - map of equivalences
 * @param field - field name in the database
 */
const updateQuery = (select, parameter, translator, field) => {
  if (parameter) {
    parameter = parameter.split(',');
    if (translator) {
      for (let i = 0; i < parameter.length; i++) {
        parameter[i] = translator[parameter[i]];
      }
    }
    select.set(field, {$in: parameter});
  }
};

/**
 * 
 * @param select - inital selection
 * @param min - min query parameter
 * @param max - max query parameter
 * @param order - array of ordering
 * @param translator - map of equivalences
 * @param field - field name in the database
 */
const updateRange = (select, min, max, order, translator, field) => {
  if (min || max) {
    const minIndex = min ? order.indexOf(translator[min]) : 0;
    const maxIndex = max ? order.indexOf(translator[max]) : order.length;
    let range = [];
    for (let i = minIndex; i <= maxIndex; i++) {
      range.push(order[i]);
    }
    select.set(field, {$in: range});
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
  // selects the Courses collection in the database
  const courses = db.collection('Courses');
  // parses URL query parameters, setting default values if null
  const query = req.query;
  let select = new Map();
  updateQuery(select, query.department, departmentTranslator, "courseNumber.department");
  updateQuery(select, query.term, termTranslator, "term");
  updateRange(select, query.minGrade, query.maxGrade, gradeArray, gradeTranslator, "grade");
  const page = parseInt(query.page) || 1;
  const perPage = parseInt(query.perPage) || 5;
  // calculates the number of entries that match the query
  const total = await courses.countDocuments(select);
  // calculates the number of entries to skip ahead to simulate pages
  const skip = (page - 1) * perPage;
  // executes the query and navigates to the correct "page"
  const data = await courses.find(select).skip(skip).limit(perPage).toArray();
  // sends the client a JSON response containing the resulting array and metadata
  res.json({
    "courses": data,
    "page": page,
    "pageSize": perPage,
    "total": total
  });
});

// exports the router object to be mounted to /courses in app.js
module.exports = router;
