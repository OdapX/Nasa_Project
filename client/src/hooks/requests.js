const URL = "http://localhost:5000";
async function httpGetPlanets() {
  let error = false;

  const response = await fetch(`${URL}/planets`).catch((error) => {});

  if (response) {
    return await response.json();
  }
}
async function httpGetLaunches() {
  let error = false;
  const response = await fetch(`${URL}/launches`).catch((err) => {
    error = true;
  });
  if (!error) {
    const res = await response.json();

    //sorting data by launch number

    return res.sort((a, b) => {
      return a.Num_launch - b.Num_launch;
    });
  }
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${URL}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Date: launch.date,
      Rocket: launch.rocket,
      Mission: launch.mission,
      Destination: launch.Destination,
    }),
  });

  return response;
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
