const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("debe responder con un mensaje de éxito", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("¡Hola desde Docker y Jenkins!");
  });
});

