/**
 * imports modules
 * - express: main framework
 * - mongodb: client connection to MongoDB
 * - cors: cross-origin resource sharing middleware
 */
const express = require("express");
const mongodb = require("../mongodb");
const cors = require("cors");

// creates a router object to handle HTTP requests
const router = express.Router();

// creates a list of whitelisted origins
const whitelist = [
  "https://scottlai.tech",
  "https://www.scottlai.tech",
  "http://localhost:3000"
];

const abbrToDept = {
  "C S": "Computer Science",
  "MAN": "Management",
  "MIS": "Management Information Systems",
  "ACC": "Accounting",
  "ANS": "Asian Studies",
  "LEB": "Legal Environment of Business",
  "CH": "Chemistry",
  "M": "Mathematics",
  "HIS": "History",
  "SDS": "Statistics and Data Sciences",
  "MUS": "Music",
  "GOV": "Government",
  "UGS": "Undergraduate Studies",
  "PED": "Physical Education",
  "RTF": "Radio-Television-Film",
  "FIN": "Finance"
};

const abbrToSem = {
  "fa20": "Fall 2020",
  "sp21": "Spring 2021",
  "fa21": "Fall 2021",
  "sp22": "Spring 2022",
  "fa22": "Fall 2022",
  "sp23": "Spring 2023",
  "su23": "Summer 2023",
  "fa23": "Fall 2023",
  "sp24": "Spring 2024"
};

const gradeOrder = ["CR", "B-", "B", "B+", "A-", "A"];

const gradeToNum = {
  "CR": 0,
  "Bminus": 1,
  "B": 2,
  "Bplus": 3,
  "Aminus": 4,
  "A": 5
};

// allows the server to serve origins in the whitelist only
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // callback(new Error(origin + " not allowed by CORS"));
      callback(null, true);
    }
  }
};

/**
 * @param select - inital selection
 * @param parameter - query parameter
 * @param field - field name in the database
 * @param translator - map of equivalences
 */
const updateQuery = (select, parameter, field, translator) => {
  if (!parameter) return;
  parameter = parameter
    .split(",")
    .filter((param) => param in translator)
    .map((param) => translator[param]);
  select.set(field, {$in: parameter});
};

/**
 * @param select - inital selection
 * @param min - min query parameter
 * @param max - max query parameter
 * @param field - field name in the database
 * @param order - array of ordering
 * @param translator - map of equivalences
 */
const updateRange = (select, min, max, field, order, translator) => {
  if (!min && !max) return;
  const minIndex = min in translator ? translator[min] : 0;
  const maxIndex = max in translator ? translator[max] : order.length;
  const range = order.slice(minIndex, maxIndex);
  select.set(field, {$in: range});
};

/**
 * Route handler for the GET method on the /courses endpoint
 *
 * @param req - incoming request object
 * @param res - outgoing response object
 * @param next - next middleware function in the request-response cycle
 */
router.get("/", cors(corsOptions), async(req, res, next) => {
  // connects to the Homepage database in the MongoDB instance
  const db = mongodb.db("Homepage");
  // selects the Courses collection in the database
  const courses = db.collection("Courses");
  // parses URL query parameters, setting default values if null
  const query = req.query;
  let select = new Map();
  updateQuery(select, query.department, "department", abbrToDept);
  updateQuery(select, query.semester, "semester", abbrToSem);
  updateRange(select, query.minGrade, query.maxGrade, "grade", gradeOrder, gradeToNum);
  const page = parseInt(query.page) || 1;
  const perPage = parseInt(query.perPage) || 10;
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
    "perPage": perPage,
    "total": total
  });
});

// exports the router object to be mounted to /courses in app.js
module.exports = router;
