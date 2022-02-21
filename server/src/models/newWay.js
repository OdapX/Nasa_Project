// const { MongoClient } = require("mongodb");

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
//   const data = await collection
//     .find(
//       {},
//       {
//         _id: 0,
//         __v: 0,
//       }
//     )
//     .toArray();
//   client.close();
//   return data;

//   // the following code examples can be pasted here...
// }
// const combineData = (input, command, data) => {
//   command = "$" + command;
//   const L = input.split(" ");
//   L[L.indexOf(command)] = data;
//   let final_value = "";
//   L.forEach((e) => {
//     final_value = final_value + e + " ";
//   });

//   return final_value;
// };
// const input = "give me in Rocket s";
// const getCommand = (input) => {
//   const L = input.split(" ");
//   let command = "";
//   L.forEach((e) => {
//     if (e.startsWith("$")) {
//       command = e.substring(1);
//     }
//   });
//   return command;
// };
// console.log(getCommand(input) == "");
// // main()
// //   .then((Res) => {
// //     Res.map((element) => {
// //       console.log(
// //         combineData(input, getCommand(input), element[getCommand(input)])
// //       );
// //     });
// //     return;
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //     return;
// //   });

// // const s = "aew $command xcc";

// // console.log(getCommand(s));

// // const L = [
// //   { a: 1, b: 2 },
// //   { a: 3, b: 4 },
// // ];
// // const xxx = "b";
// // L.map((e) => {
// //   console.log(e[xxx]);
// // });

// //get(e from subcategory in database)

require("dotenv").config();
console.log(typeof process.env.DB_URL);
