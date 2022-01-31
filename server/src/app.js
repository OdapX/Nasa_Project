const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");
const launchRouter = require("./routes/launches/launch.router");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
/*  Serve the website after deploy */
app.use(express.static(path.join(__dirname, ".", "..", "Client")));

app.use(planetsRouter);

app.use("/launches", launchRouter);

module.exports = app;
