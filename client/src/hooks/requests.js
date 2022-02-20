const URL = "http://localhost:5000";
async function httpGetPlanets() {
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
  let err = false;
  const response = await fetch(`${URL}/launches`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Launch_Date: launch.launchDate,
      Rocket: launch.rocket,
      Mission: launch.mission,
      Destination: launch.Destination,
    }),
  }).catch((error) => {
    err = true;
  });

  if (err) {
    return { status: 400 };
  }
  return response;
}

async function httpAbortLaunch(id) {
  let err = false;
  const response = await fetch(`${URL}/launches/${id}`, {
    method: "DELETE",
  }).catch(() => {
    err = true;
  });
  if (err) {
    return {
      ok: false,
    };
  }
  return response;
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
