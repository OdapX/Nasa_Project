const request = require("supertest");
const app = require("../../app");
const { loadData } = require("../../models/planets.model.js");
const { ConnectToDB, DisconnectFromDB } = require("../../utils/Mongo");

describe("Testing launches API", () => {
  beforeAll(async () => {
    await ConnectToDB();
    await loadData();
  });
  afterAll(async () => {
    await DisconnectFromDB();
  });
  //Test GET/Launches
  describe("Testing GET/Launches", () => {
    test("Expecting status 200", async () => {
      await request(app)
        .get("/launches")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  //Test Post/Launches
  describe("Testing POST/Launches", () => {
    const Valid_Launch = {
      Launch_Date: new Date("17 september,2025"),
      Mission: "AxE-279",
      Rocket: "Tesla-8",
      Destination: "Mars",
    };

    const Missing_Field_Launch = {
      Launch_Date: new Date("17 september,2025"),
      Mission: "AxE-279",
      Rocket: "Tesla-8",
      Destination: "",
    };

    const Invalid_Date_Launch = {
      Launch_Date: "hey",
      Mission: "AxE-279",
      Rocket: "Tesla-8",
      Destination: "Mars",
    };

    test("Testing with Valid post data", async () => {
      const response = await request(app)
        .post("/launches")
        .send(Valid_Launch)
        .expect("Content-Type", /json/)
        .expect(201);
    });

    test("Testing with Missing post data", async () => {
      const response = await request(app)
        .post("/launches")
        .send(Missing_Field_Launch)
        .expect(400);
      expect(response.body.message).toMatch("Missing launch informations");
    });

    test("Testing with invalid date format", async () => {
      const response = await request(app)
        .post("/launches")
        .send(Invalid_Date_Launch)
        .expect(400);

      expect(response.body.message).toMatch("Invalid  Date Format");
    });
  });

  //Test GET/DELETE /Launches/:id
  describe("Testing DELETE/Launches/:id", () => {
    test("Test delete with valid id", async () => {
      request(app).delete("/launches/1").expect(200);
    });
    test("Test delete with invalid id", async () => {
      const response = await request(app).delete("/launches/1000").expect(404);
      expect(response.body.error).toMatch("Id Launch Number not found");
    });
  });
});
