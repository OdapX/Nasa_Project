const { launches } = require("../../models/launch.model");

function getLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = getLaunches;
