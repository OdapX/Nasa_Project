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
  const New_Num_launch = (await LastElement()) + 1;
  console.log(`newwww ${New_Num_launch}`);
  Object.assign(launch, {
    Num_launch: New_Num_launch,
    Customers: ["NASA", "SpaceX"],
  });
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
async function LastElement() {
  //if there is still no launches in the database default to 1
  const lastElement = await launches.findOne().sort("-Num_launch");

  return lastElement ? lastElement.Num_launch : 0;
}
async function AbortLaunch(Num_Launch) {
  await launches
    .updateOne(
      { Num_Launch: Num_Launch },
      { upcoming: false, success: false },
      { upsert: false }
    )
    .catch((e) => {
      throw new Error(`Couldn't abort ${e}`);
    });
}

module.exports = {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
};
