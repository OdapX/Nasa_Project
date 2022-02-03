const http = require("http");
const mongoose = require("mongoose");
//const {Worker, isMainThread} = reqire("worker_thread")
const app = require("./app");
const { loadData } = require("./models/planets.model");
const { ConnectToDB } = require("./utils/Mongo");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await ConnectToDB();

  await loadData();

  server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });
}

startServer();
