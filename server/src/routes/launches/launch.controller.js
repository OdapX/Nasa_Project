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

  /* Validation before posting*/

  //Handling Missing filed error
  if (
    !launch.Date ||
    !launch.Destination ||
    !launch.Rocket ||
    !launch.Mission
  ) {
    return res.status(400).json({ message: "Missing launch informations" });
  }

  launch.Date = new Date(launch.Date);

  //Handling Invalid date format
  if (launch.Date.toString() == "Invalid Date") {
    return res.status(400).json({ message: "Invalid  Date Format" });
  }

  //Post the launch if all the above are ok
  const new_Launch = AddLaunch(launch);
  res
    .status(201)
    .json(Object.assign(new_Launch, { message: "Created Successfully" }));
}

function httpAbortLaunch(req, res) {
  const Num_Launch = +req.params.id;

  const launch = AbortLaunch(Num_Launch);
  if (!launch.error) {
    return res.status(200).json(launch);
  }
  return res.status(404).json({ error: "Id Launch Number not found" });
}

module.exports = { httpGetLaunches, httpPostLaunch, httpAbortLaunch };
