const mongoose = require("mongoose");

const Launch_Schema = new mongoose.Schema({
  Num_launch: {
    type: number,
    required: true,
  },
  Launch_Date: {
    type: Date,
    required: true,
  },
  Mission: {
    type: String,
    required: true,
  },
  Rocket: {
    type: String,
    requied: true,
  },
  Customers: {
    type: [String],
    default: ["NASA", "SpaceX"],
  },
  Destination: {
    type: String,
    required: true,
  },
  upcoming: {
    type: boolean,
    default: true,
  },
  success: {
    type: boolean,
    default: true,
  },
});

module.exports = mongoose.model("Launch", Launch_Schema);
