/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('categories').del()
  await knex('categories').insert([
    {id: 1, name: 'Food', description: 'Expenses related to groceries, dining out, and beverages.'},
    {id: 2, name: 'Housing', description: 'Costs for rent or mortgage, utilities, internet and phone bills.'},
    {id: 3, name: 'Transportation', description: 'Expenses for public transportation, petrol, parking fees, and car maintenance related costs.'},
    {id: 4, name: 'Healthcare', description: 'Medical, dental care, vision expenses.'},
    {id: 5, name: 'Insurance', description: 'Expenses for any health, life, house, car insurance.'},
    {id: 6, name: 'Debt Payments', description: 'Recurring costs such as personal loans, credit card payments and student loan.'},
    {id: 7, name: 'Savings & Investments', description: 'Contributions to savings accounts, retirement accounts, emergency fund, and investments.'},
    {id: 8, name: 'Personal Care', description: 'Expenses for personal care products, clothings, and fitness related costs.'},
    {id: 9, name: 'Entertainment', description: 'Costs for recreational activities, subscriptions, hobbies, and events.'},
    {id: 10, name: 'Education', description: 'Tuition fees, books, supplies, and any educational material costs.'},
    {id: 11, name: 'Travel', description: 'Expenses related to holiday, accomodation costs, transport costs, and travel insurance.'},
    {id: 12, name: 'Miscellaneous', description: 'Costs related gifts, donations, one-off payments, and unclassified costs.'},
  ]);
};
