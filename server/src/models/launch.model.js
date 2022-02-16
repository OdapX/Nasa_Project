const { launches } = require("./launches.mongo");
const planets = require("./planets.mongo");

async function GetLaunches() {
  return await launches.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function PlanetExits(planetName) {
  const planet = await planets.findOne({ planetName: planetName }, {});
  if (!planet) throw new Error("Planet not found");
}
async function AddLaunch(launch) {
  const New_Num_launch = (await LastElement()) + 1;

  Object.assign(launch, {
    Num_launch: New_Num_launch,
    Customers: ["NASA", "SpaceX"],
    test: { data: "dfdfdfdfffd" },
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
      //throw new Error(e);
      console.log(e);
    });
}
async function LastElement() {
  //if there is still no launches in the database default to 1
  const lastElement = await launches.findOne().sort("-Num_launch");

  return lastElement ? lastElement.Num_launch : 0;
}
async function AbortLaunch(Num_Launch) {
  const aborted = await launches.updateOne(
    { Num_launch: Num_Launch },
    { upcoming: false, success: false },
    { upsert: true }
  );
  if (aborted.ok != 1) throw new Error("not found");
}

module.exports = {
  GetLaunches,
  AddLaunch,
  AbortLaunch,
  PlanetExits,
};
