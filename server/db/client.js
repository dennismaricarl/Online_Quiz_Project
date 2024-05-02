const {MongoClient} = require('mongodb')

const connectionString = "mongodb://localhost:27017/onlinequiz";
const client = new MongoClient(connectionString);

async function dbConnection(){
  try {
    await client.connect();
    console.log("Connected to db successfully")
    return client.db().collection('questions')

  } catch(e) {
    console.error(e);
  }

}

module.exports = dbConnection 