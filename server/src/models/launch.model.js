const launches = require("./launches.mongo");
const planets = require("./planets.mongo");

const launch = {
  Num_launch: 0,
  Date: new Date("october 10, 2025").toString(),
  Mission: "apolo",
  Rocket: "FT-787",
  Destination: "Kepler-1652 b",
  Customers: ["SpaceX", "NASA"],
  upcoming: true,
  success: true,
};

async function GetLaunches() {
  return await launches.find(
    {},
    {
      _id: 0,
      _v: 0,
    }
  );
}

async function AddLaunch(launch) {
  const planet = planets.findOne({ keplerName: launch.Destination }, {});
  if (!planet) {
    throw new Error("Planet not found");
  }
  await SaveLaunch(launch);
}

async function SaveLaunch(launch) {
  await launches
    .updateOne(
      {
        Num_launch: launch.Num_launch,
      },
      launch,
      {
        upsert: true,
      }
    )
    .catch((e) => {
      console.error(`error at saving launch ${e}`);
    });
}

async function AbortLaunch(Num_Launch) {}

module.exports = {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
};
