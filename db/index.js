const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Establish which mongodb server we want to connect to
const url = 'mongodb://localhost:27017/rpsls';

// Make the connection to the server
const db = MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log('Connected Successfully to the mongodb server');

  // does connection need to be closed here?
});

module.exports = db;

