const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('./knexfile')[environment]
const database       = require('knex')(configuration)

database.raw('INSERT INTO secrets (message, created_at) VALUES(?,?)', ['bananas in pajamas', new Date])
.then(() => {
  database.raw('SELECT * FROM secrets').then((data) => {
    console.log(data.rows)
    process.exit()
  })
})
