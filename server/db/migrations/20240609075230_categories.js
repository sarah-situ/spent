/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('categories', (table) => {
    table.increments('id').primary()
    table.string('name')
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down (knex) {
    return knex.schema.dropTable('categories')
  
}
