const express = require("express");
const launchRouter = express.Router();

const { launches } = require("../../models/launch.model");
const getLaunches = require("./launch.controller");

launchRouter.get("/", getLaunches);

module.exports = launchRouter;
