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
launches.set(launch.Num_launch, launch);

module.exports = {
  launches,
};
