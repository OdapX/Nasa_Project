function Validate_launch_data(launch) {
  if (
    !launch.Launch_Date ||
    !launch.Destination ||
    !launch.Rocket ||
    !launch.Mission
  ) {
    return { error: 400, message: "Missing launch informations" };
  }

  if (new Date(launch.Launch_Date).toString() === "Invalid Date") {
    return { error: 400, message: "Invalid  Date Format" };
  }

  return { error: 0 };
}

module.exports = Validate_launch_data;
