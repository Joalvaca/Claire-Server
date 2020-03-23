const express = require("express");
const DistributorService = require("./distributors-service");
const distributorRouter = express.Router();

distributorRouter.route("/").get((req, res, next) => {
  DistributorService.getAllProducts(req.app.get("db"))
    .then(distributor => {
      res.json(distributor);
    })
    .catch(next);
});

module.exports = distributorRouter;
