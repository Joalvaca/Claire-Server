const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { makeClaireproductsArray } = require("./claireproducts.fixtures");
const helpers = require("./test-helpers");


describe("products Endpoints", function() {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));
 

  describe(`GET /api/products`, () => {
    context(`Given no products`, () => {
      it(`responds with 200 and and empty list`, () => {
        return supertest(app)
          .get("/api/footprints")
          .expect(200, []);
      });
    });

    context("Given there are prints in the database", () => {
      const testProducts = makeClaireproductsArray();
      beforeEach("insert products", () => {
        return db.into("claire_products").insert(testProducts);
      });

      it("responds with 200 and all of the footprints", () => {
        return supertest(app)
          .get("/api/products")
          .expect(200, testProducts);
      });
    });
  });
