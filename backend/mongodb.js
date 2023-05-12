const mongodb = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();
  console.log('Connected to MongoDB!');
}

connect();

module.exports = client;
