
const knex = require('knex')
const app = require('./app')
const { PORT } = require('./config')



const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
  })
  
  knexInstance.from('claire_products').select('*')
    .then(result =>{
        console.log(result)
    })


  


app.listen (PORT,() =>{
    console.log('Server listening at http://localhost: ${PORT}')
})