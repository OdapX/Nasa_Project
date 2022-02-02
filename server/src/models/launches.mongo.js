const mongoose = require("mongoose");

const Launch_Schema = new mongoose.Schema({
  Num_launch: {
    type: Number,
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
    type: Boolean,
    default: true,
  },
  success: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Launch", Launch_Schema);
