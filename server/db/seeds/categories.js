/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {id: 1, name: 'Utilities'},
    {id: 2, name: 'Household'},
    {id: 3, name: 'Groceries'},
    {id: 4, name: 'Food'},
    {id: 5, name: 'Health'},
    {id: 6, name: 'Transport'},
    {id: 7, name: 'Entertainment'},
    {id: 8, name: 'Shopping'},
    {id: 9, name: 'Travel'},
    {id: 10, name: 'Misc'}
  ]);
};
