const {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
} = require("../../models/launch.model");

async function httpGetLaunches(req, res) {
  return res.status(200).json(await GetLaunches());
}

async function httpPostLaunch(req, res) {
  const launch = req.body;

  /* Validation before posting*/

  //Handling Missing filed error
  if (
    !launch.Launch_Date ||
    !launch.Destination ||
    !launch.Rocket ||
    !launch.Mission
  ) {
    return res.status(400).json({ message: "Missing launch informations" });
  }
  //Post the launch if all the above are ok

  await AddLaunch(launch)
    .then(() => {
      return res.status(201).json({ message: "created successfully" });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Invalid  Date Format" });
    });
}

async function httpAbortLaunch(req, res) {
  const Num_Launch = +req.params.id;

  await AbortLaunch(Num_Launch)
    .then(() => {
      return res.status(200).json(launch);
    })
    .catch(() => {
      return res.status(404).json({ error: "Id Launch Number not found" });
    });
}

module.exports = { httpGetLaunches, httpPostLaunch, httpAbortLaunch };
