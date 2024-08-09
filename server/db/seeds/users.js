/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|66a34d47f9f7a597847620c5',
      email: 'sarahsitu563@gmail.com',
      name: 'Sarah',
    },
  ])
}
