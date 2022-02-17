// const { MongoClient } = require("mongodb");
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// const path = require("path");

// const url =
//   "mongodb+srv://odap:benzover145145@nasacluster.mpow6.mongodb.net/NasaCluster?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// // Database Name
// const dbName = "NasaCluster";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect().catch((Err) => {
//     console.log("Error connecting to");
//   });
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   const collection = db.collection("launches");
//   const keys = await collection.findOne(
//     {},
//     {
//       _id: 0,
//       __v: 0,
//     }
//   );
//   for (key in keys) {
//     if (key != "_id") console.log(key);
//   }

//   client.close();
//   // the following code examples can be pasted here...
// }

// main()
//   .then((Res) => {
//     console.log(Res);
//     return;
//   })
//   .catch((err) => {
//     console.log(err);
//     return;
//   });

const s = "addffdff $dfdfdf dfdff";
const L = s.split(" ");
L.forEach((e) => {
  if (e.startsWith("$")) {
    console.log(e);
  }
});
