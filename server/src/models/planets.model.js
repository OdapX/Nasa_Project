const path = require("path");
const fs = require("fs");

const { parse } = require("csv-parse");
const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, ".", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          await SavePlanet(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", async () => {
        const planetsFound = (await getPlanets()).length;
        console.log(`${planetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function SavePlanet(planet) {
  await planets
    .updateOne(
      { keplerName: planet.kepler_name },
      { keplerName: planet.kepler_name },
      { upsert: true }
    )
    .catch((err) => {
      console.error(err);
    });
}
async function getPlanets() {
  return await planets.find(
    {},
    {
      _id: 0,
      _v: 0,
    }
  );
}

module.exports = { getPlanets, loadData };
