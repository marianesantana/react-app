var mongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":

const url = "mongodb://127.0.0.1:27017"

 
const { MongoClient } = require("mongodb");
const uri = 'mongodb://localhost:27017';  // mongodb://localhost - will fail

(async function() {
  try {

    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    // ... anything
    console.log('eu acho que funcionou')
    client.close();
  } catch(e) {
    console.error(e)
  }


})()

