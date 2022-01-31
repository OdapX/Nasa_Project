const URL = "http://localhost:5000";
async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);

  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const res = await response.json();

  //sorting data by launch number

  return res.sort((a, b) => {
    return a.Num_launch - b.Num_launch;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
