const request = require("supertest");
const app = require("../../app");

describe("Testing GET/ Planets", () => {
  test("Expected Status 200", async () => {
    request(app)
      .get("/planets")
      .expect("Content-Type", "application/json")
      .expect(200);
  });
});
