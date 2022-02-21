const request = require("supertest");
const app = require("../../app");
const { loadData } = require("../../models/planets.model.js");
const { ConnectToDB, DisconnectFromDB } = require("../../utils/Mongo");

describe("Testing GET/ Planets", () => {
  beforeAll(async () => {
    await ConnectToDB();
    await loadData();
  });
  afterAll(async () => {
    await DisconnectFromDB();
  });
  test("Expected Status 200", async () => {
    request(app)
      .get("/planets")
      .expect("Content-Type", "application/json")
      .expect(200);
  });
});
