const express = require("express");

const launchRouter = express.Router();

const { launches } = require("../../models/launch.model");
const {
  httpGetLaunches,
  httpPostLaunch,
  httpAbortLaunch,
} = require("./launch.controller");

launchRouter.get("/", httpGetLaunches);
launchRouter.post("/", httpPostLaunch);
launchRouter.delete("/:id", httpAbortLaunch);
module.exports = launchRouter;
