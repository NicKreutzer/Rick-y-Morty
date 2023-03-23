const app = require("../app");
const session = require("supertest");
const agent = session(app);

describe("Route: GET onsearch/:id", () => {
  it("Responde con status: 200", async () => {
    const response = await session(app).get("/onsearch/1");
    //console.log(response);
    expect(response.statusCode).toBe(200);
  });
  test("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
    const response = await session(app).get("/onsearch/1");
    // response.body = ["id", "name", "image", "gender", "species"]
    expect(Object.keys(response.body)).toEqual([
      "id",
      "image",
      "name",
      "gender",
      "species",
    ]);
  });
  it("Si hay un error responde con status: 500", () => {
    return agent
      .get("/onsearch/10000")
      .send()
      .then((response) => expect(response.statusCode).toBe(500));
  });
});
