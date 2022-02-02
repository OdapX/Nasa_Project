const { getPlanets } = require("../../models/planets.model");
async function httpGetAllplanets(req, res) {
  return res.status(200).json(await getPlanets());
}
module.exports = { httpGetAllplanets };
