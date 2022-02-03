const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://odap:benzover145145@nasacluster.mpow6.mongodb.net/NasaCluster?retryWrites=true&w=majority";

async function ConnectToDB() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("DB_Connected");
    })
    .catch((err) => {
      console.log(`Couldn't connect to mongodb : ${err}`);
    });
}
async function DisconnectFromDB() {
  await mongoose.disconnect();
}

module.exports = { ConnectToDB, DisconnectFromDB };
