
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE secrets RESTART IDENTITY').then(() => {
    return Promise.all([
      knex.raw('INSERT INTO secrets (message, created_at) VALUES (?, ?)', ['Fake News', new Date]),
      knex.raw('INSERT INTO secrets (message, created_at) VALUES (?, ?)', ['Taco Bowl', new Date]),
      knex.raw('INSERT INTO secrets (message, created_at) VALUES (?, ?)', ['Call your mom', new Date])
    ])
  })
};
