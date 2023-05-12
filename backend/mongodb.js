/**
 * imports modules
 * - mongodb: Node.js driver for MongoDB
 * - dotenv: use environment variables
 */
const mongodb = require('mongodb');
const dotenv = require('dotenv');

// loads the .env file holding the environment variables
dotenv.config();

// retrieves the MongoDB connection URI from .env
const uri = process.env.MONGODB_URI;

// creates a new MongoClient (a client connection to the MongoDB server)
const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// asynchronously connects to the database using connect()
async function connect() {
  await client.connect();
  console.log('Connected to MongoDB!');
}

// calls the connect() function when the app starts
connect();

// exports the MongoClient for database operations throughout the app
module.exports = client;
