const { getPlanets } = require("../../models/planets.model");
function httpGetAllplanets(req, res) {
  return res.status(200).json(getPlanets());
}
module.exports = { httpGetAllplanets };
