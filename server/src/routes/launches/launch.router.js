const express = require("express");

const launchRouter = express.Router();

const { launches } = require("../../models/launch.model");
const httpGetLaunches = require("./launch.controller");

launchRouter.get("/", httpGetLaunches);

module.exports = launchRouter;
