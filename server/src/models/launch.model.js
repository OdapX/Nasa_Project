const launches = new Map();

const launch = {
  Num_launch: 1,
  Date: new Date("october 10, 2025"),
  Mission: "apolo",
  Rocket: "FT-787",
  Destination: "Mars",
  Customer: ["SpaceX"],
  upcoming: true,
  success: true,
  aborted: false,
};
const launch2 = {
  Num_launch: 0,
  Date: new Date("october 10, 2025"),
  Mission: "apolo",
  Rocket: "FT-787",
  Destination: "Mars",
  Customer: ["SpaceX"],
  upcoming: true,
  success: true,
  aborted: false,
};

launches.set(launch.Num_launch, launch);
launches.set(launch2.Num_launch, launch2);
function GetLaunches() {
  return Array.from(launches.values()).sort((a, b) => {
    return a.Num_launch - b.Num_launch;
  });
}

module.exports = {
  GetLaunches,
};
