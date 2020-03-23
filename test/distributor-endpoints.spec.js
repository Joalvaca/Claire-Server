const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { makeDistributorlistArray } = require("./distributorlist.fixtures");
const helpers = require("./test-helpers");

describe("distributors Endpoints", function() {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe(`GET /api/distributors`, () => {
    context(`Given no products`, () => {
      it(`responds with 200 and and empty list`, () => {
        return supertest(app)
          .get("/api/distributors")
          .expect(200, []);
      });
    });

    context("Given there are distributors in the database", () => {
      const testProducts = makeDistributorlistArray();
      beforeEach("insert distributors", () => {
        return db.into("distributor_list").insert(testProducts);
      });

      it("responds with 200 and all of the footprints", () => {
        return supertest(app)
          .get("/api/distributors")
          .expect(200, testProducts);
      });
    });
  });
});
