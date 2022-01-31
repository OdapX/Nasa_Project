const express = require("express");

const launchRouter = express.Router();

const { launches } = require("../../models/launch.model");
const { httpGetLaunches, httpPostLaunch } = require("./launch.controller");

launchRouter.get("/", httpGetLaunches);
launchRouter.post("/", httpPostLaunch);

module.exports = launchRouter;
