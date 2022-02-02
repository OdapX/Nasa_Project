const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const { loadData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;
const DB_URL =
  "mongodb+srv://odap:benzover145145@nasacluster.mpow6.mongodb.net/NasaCluster?retryWrites=true&w=majority";

const server = http.createServer(app);

async function startServer() {
  await mongoose
    .connect(DB_URL)
    .then((res) => {
      console.log("DB_Connected");
    })
    .catch((err) => {
      console.error(err);
    });

  await loadData();
  server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });
}

startServer();
