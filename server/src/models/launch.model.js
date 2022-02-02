//const launches = require("./launches.mongo");

const launches = new Map();

let last_Num = 0;
const launch0 = {
  Num_launch: 0,
  Date: new Date("october 10, 2025").toString(),
  Mission: "apolo",
  Rocket: "FT-787",
  Destination: "Mars",
  Customers: ["SpaceX", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch0.Num_launch, launch0);

function GetLaunches() {
  return Array.from(launches.values()).sort((a, b) => {
    return a.Num_launch - b.Num_launch;
  });
}

function AddLaunch(launch) {
  last_Num++;
  launch.Date = launch.Date.toString();
  new_launch = Object.assign(launch, {
    Num_launch: last_Num,
    Customers: ["SpaceX", "NASA"],
    upcoming: true,
    success: true,
  });
  launches.set(last_Num, new_launch);

  return new_launch;
}

function AbortLaunch(Num_Launch) {
  try {
    const launch = launches.get(Num_Launch);
    launch.success = false;
    launch.upcoming = false;
    return launch;
  } catch (e) {
    return { error: "not found" };
  }
}

module.exports = {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
};
