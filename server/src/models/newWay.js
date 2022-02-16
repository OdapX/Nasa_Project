// const mongojs = require("mongojs");

// const DB_URL =
//   "mongodb+srv://damn:nVp14K0v2957f6we@db-mongodb-nyc3-22247-7d522c30.mongo.ondigitalocean.com/education?authSource=admin&replicaSet=db-mongodb-nyc3-22247&tls=true&tlsCAFile=./database.crt";

// const collections = ["word"];

// const db = mongojs(DB_URL, collections);

// db.on("error", function (error) {
//   console.log("Database Error:", error);
// });
// db.word.find({}, function (error, found) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(found);
//     db.close();
//     return;
//   }
// });

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://odap:benzover145145@nasacluster.mpow6.mongodb.net/NasaCluster?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = "NasaCluster";

async function main() {
  // Use connect method to connect to the server
  await client.connect().catch((Err) => {
    console.log("Error connecting to");
  });
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("launches");
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
