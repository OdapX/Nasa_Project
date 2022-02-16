const mongojs = require("mongojs");

const DB_URL =
  "mongodb+srv://damn:nVp14K0v2957f6we@db-mongodb-nyc3-22247-7d522c30.mongo.ondigitalocean.com/education?authSource=admin&replicaSet=db-mongodb-nyc3-22247&tls=true&tlsCAFile=./database.crt";

const collections = ["word"];

const db = mongojs(DB_URL, collections);

db.on("error", function (error) {
  console.log("Database Error:", error);
});
db.word.find({}, function (error, found) {
  if (error) {
    console.log(error);
  } else {
    console.log(found);
    db.close();
    return;
  }
});
