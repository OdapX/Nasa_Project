const request = require("supertest");
const app = require("../../app");
const { ConnectToDB, DisconnectFromDB } = require("../../utils/Mongo");

describe("Testing GET/ Planets", () => {
  beforeAll(async () => {
    await ConnectToDB();
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
