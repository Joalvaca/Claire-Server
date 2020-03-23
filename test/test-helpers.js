function cleanTables(db) {
  return db.raw(
    `TRUNCATE
    claire_products,
    distributor_list
            CASCADE
        `
  );
}

module.exports = {
  cleanTables
};
