const request = require("supertest");
const app = require("../../app");
const { ConnectToDB, DisconnectFromDB } = require("../../utils/Mongo");

describe("Testing GET/ Planets", () => {
  beforeAll((done) => {
    ConnectToDB();
    done();
  });
  afterAll((done) => {
    DisconnectFromDB();
    done();
  });
  test("Expected Status 200", async () => {
    request(app)
      .get("/planets")
      .expect("Content-Type", "application/json")
      .expect(200);
  });
});
