const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");
const launchRouter = require("./routes/launches/launch.router");

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
/*  Serve the website after deploy */
app.use(express.static(path.join(__dirname, ".", "..", "client")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, ".", "..", "client", "index.html"));
});

app.use(planetsRouter);

app.use("/launches", launchRouter);

module.exports = app;
