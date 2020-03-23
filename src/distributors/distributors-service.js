const DistributorService = {
  getAllProducts(knex) {
    return knex.select("*").from("distributor_list");
  }
};

module.exports = DistributorService;
