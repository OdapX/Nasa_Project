const { GetLaunches, AddLaunch } = require("../../models/launch.model");

function httpGetLaunches(req, res) {
  return res.status(200).json(GetLaunches());
}

function httpPostLaunch(req, res) {
  const launch = req.body;

  // Validation before posting

  if (
    !launch.Date ||
    !launch.Destination ||
    !launch.Rocket ||
    !launch.Mission
  ) {
    console.log("first");
    return res.status(400).json({ message: "Missing launch informations" });
  }
  launch.Date = new Date(launch.Date);
  if (launch.Date.toString() == "invalid date") {
    return res.status(400).json({ message: "Invalid  Date " });
  }
  AddLaunch(launch);
  res.status(201).json({ message: "Launch added successfully" });
}

module.exports = { httpGetLaunches, httpPostLaunch };
