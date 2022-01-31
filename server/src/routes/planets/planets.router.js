const express = require("express");
const { httpGetAllplanets } = require("./planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/planets", httpGetAllplanets);

module.exports = planetsRouter;
