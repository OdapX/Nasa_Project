const {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
} = require("../../models/launch.model");

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

function httpAbortLaunch(req, res) {
  const Num_Launch = +req.params.id;

  const launch = AbortLaunch(Num_Launch);
  if (launch) {
    return res.status(200).json(launch);
  }
  return res.status(404).json({ error: "iLaunch Number not found" });
}

module.exports = { httpGetLaunches, httpPostLaunch, httpAbortLaunch };
