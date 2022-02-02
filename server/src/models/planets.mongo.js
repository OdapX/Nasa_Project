const mongoose = require("mongoose");

const Planet_Schema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", Planet_Schema);
