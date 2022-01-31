const { GetLaunches } = require("../../models/launch.model");

function httpGetLaunches(req, res) {
  return res.status(200).json(GetLaunches());
}

module.exports = httpGetLaunches;
