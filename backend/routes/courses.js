var express = require('express');
const mongodb = require('../mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  const db = mongodb.db('Homepage');
  const collection = db.collection('Courses');
  const courses = await collection.find().toArray();
  res.json(courses);
});

module.exports = router;
