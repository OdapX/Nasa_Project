const {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
  PlanetExits,
} = require("../../models/launch.model");

const Validate_launch_data = require("./launch.validation");

async function httpGetLaunches(req, res) {
  return res.status(200).json(await GetLaunches());
}

async function httpPostLaunch(req, res) {
  const launch = req.body;

  /* Validation before posting*/
  const validation = Validate_launch_data(launch);
  if (validation.error === 400) {
    return res.status(400).json({ message: validation.message });
  }
  /* check if the destination exits */
  await PlanetExits(launch.Destination).catch(() => {
    return res.status(400).json({ message: "Destination Does not exits" });
  });

  await AddLaunch(launch)
    .then(() => {
      return res.status(201).json({ message: "created successfully" });
    })
    .catch((err) => {
      return res.status(500).json({ message: "Launch was not saved" });
    });
}

async function httpAbortLaunch(req, res) {
  const Num_Launch = +req.params.id;
  try {
    await AbortLaunch(Num_Launch);
  } catch {
    return res.status(404).json({ error: "Id Launch Number not found" });
  }

  return res.status(200).json({ message: "Aborted successfully" });
}

module.exports = { httpGetLaunches, httpPostLaunch, httpAbortLaunch };
