const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

const path = require("path");
// Connection URL
console.log(path.join(__dirname, "database.crt"));
const url = `mongodb+srv://damn:nVp14K0v2957f6we@db-mongodb-nyc3-22247-7d522c30.mongo.ondigitalocean.com/healthcare?authSource=admin&replicaSet=db-mongodb-nyc3-22247&tls=true&tlsCAFile=${path.join(
  __dirname,
  "database.crt"
)}`;
const client = new MongoClient(url);

// Database Name
const dbName = "healthcare";

async function main() {
  // Use connect method to connect to the server
  await client.connect().catch((Err) => {
    console.log("Error connecting to");
  });
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("cancer");
  console.log(await collection.find({}).toArray());
  client.close();
  // the following code examples can be pasted here...
}

main()
  .then((Res) => {
    console.log(Res);
    return;
  })
  .catch((err) => {
    console.log(err);
    return;
  });
