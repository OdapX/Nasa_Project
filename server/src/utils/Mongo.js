const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

async function ConnectToDB() {
  await mongoose.connect(DB_URL).catch((err) => {
    console.log(`Couldn't connect to mongodb : ${err}`);
  });
}
async function DisconnectFromDB() {
  await mongoose.disconnect();
}

module.exports = { ConnectToDB, DisconnectFromDB };
