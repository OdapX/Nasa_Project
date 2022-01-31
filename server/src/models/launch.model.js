const launches = new Map();

const last_Num = 0;
const launch = {
  Num_launch: 0,
  Date: new Date("october 10, 2025"),
  Mission: "apolo",
  Rocket: "FT-787",
  Destination: "Mars",
  Customer: ["SpaceX", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.Num_launch, launch);

function GetLaunches() {
  return Array.from(launches.values()).sort((a, b) => {
    return a.Num_launch - b.Num_launch;
  });
}

function AddLaunch(launch) {
  last_Num++;
  launches.set(
    last_Num,
    Object.assign(launch, {
      Num_launch: last_Num,
      Customer: ["SpaceX", "NASA"],
      upcoming: true,
      success: true,
    })
  );
  console.log("done");
}

module.exports = {
  GetLaunches,
  AddLaunch,
};
