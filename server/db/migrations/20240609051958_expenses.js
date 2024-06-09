/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('expenses', (table) => {
      table.increments('id').primary()
      table.date('date').notNullable()
      table.decimal('amount').notNullable()
      table.integer('category_id').unique().notNullable().references('categories.id')
      table.string('description')
      table.integer('month_id').notNullable().references('months.id')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
      return knex.schema.dropTable('expenses')
    
  };