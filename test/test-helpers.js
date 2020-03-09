function cleanTables(db) {
  return db.raw(
    `TRUNCATE
    claire_products
            CASCADE
        `
  );
}

module.exports = {
  cleanTables
};
