const ProductsService = {
    getAllProducts(knex){
        return knex.select('*').from('claire_products')
    },
}

module.exports = ProductsService
