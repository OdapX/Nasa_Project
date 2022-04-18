const { MongoClient } = require("mongodb");

const path = require("path");

const url = `mongodb+srv://damn:nVp14K0v2957f6we@db-mongodb-nyc3-22247-7d522c30.mongo.ondigitalocean.com/location?authSource=admin&replicaSet=db-mongodb-nyc3-22247&tls=true&tlsCAFile=${path.join(
  __dirname,
  "database.crt"
)}`;

const client = new MongoClient(url);

// Database Name
const dbName = "location";

async function main() {
  // Use connect method to connect to the server
  await client.connect().catch((Err) => {
    console.log(Err);
  });

  const db = client.db(dbName);
  const L = [];
  const collection = db.collection("region");
  await collection
    .find(
      {},
      {
        _id: 0,
      }
    )
    .limit(20000)
    .toArray();
  client.close();

  return L;
}

main().then((data) => console.log(data));

