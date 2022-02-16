const mongoose = require("mongoose");

const TESTSchema = mongoose.Schema({
  data: {
    type: String,
    default: "work you son of",
  },
  launch: { type: mongoose.Schema.Types.ObjectId, ref: "Launch" },
});

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
    required: true,
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

  test: TESTSchema,
});

const launches = mongoose.model("Launch", Launch_Schema);
const tests = mongoose.model("test", TESTSchema);
module.exports = {
  launches,
  tests,
};
