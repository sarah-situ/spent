export const up = function (knex) {
    return knex.schema.createTable('expenses', (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().notNullable()
      table.integer('category_id').unsigned().notNullable()
      table.date('date')
      table.string('description')
      table.decimal('amount', 10, 2)
      table.index('user_id')
      table.index('category_id')
    })
  }
  
  export const down = function (knex) {
    return knex.schema.dropTable('expenses')
  }