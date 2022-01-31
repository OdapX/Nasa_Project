const { GetLaunches, AddLaunch } = require("../../models/launch.model");

function httpGetLaunches(req, res) {
  return res.status(200).json(GetLaunches());
}

function httpPostLaunch(req, res) {
  const launch = req.body;
  launch.Date = new Date(launch.Date);
  addLaunch(launch);
}

module.exports = { httpGetLaunches, httpPostLaunch };
