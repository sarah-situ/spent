/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('expenses').del()
  await knex('expenses').insert([
    {id: 1, date: '2024-05-01', amount: 210.00, category_id: 1, description: 'Power bill'},
    {id: 2, date: '2024-05-03', amount: 15.50, category_id: 2, description: 'Cleaning Products'},
    {id: 3, date: '2024-05-05', amount: 80.78, category_id: 3, description: 'Weekly shop'},
    {id: 4, date: '2024-05-10', amount: 12.98, category_id: 4, description: 'Sushi'},
    {id: 5, date: '2024-05-12', amount: 45.00, category_id: 5, description: 'Appointment'},
    {id: 6, date: '2024-05-15', amount: 20.00, category_id: 6, description: 'Top up Snapper'},
    {id: 7, date: '2024-05-16', amount: 11.00, category_id: 7, description: 'Movies'},
    {id: 8, date: '2024-05-18', amount: 18.00, category_id: 8, description: 'Earrings'},
    {id: 9, date: '2024-05-20', amount: 300.00, category_id: 9, description: 'Plane Tickets'},
    {id: 10, date: '2024-05-22', amount: 20.00, category_id: 10, description: 'Gift'},
    {id: 11, date: '2024-06-01', amount: 15.00, category_id: 4, description: 'Pizza'},
    {id: 12, date: '2024-06-04', amount: 100.00, category_id: 3, description: 'Weekly Shop'},
    {id: 13, date: '2024-06-06', amount: 11.00, category_id: 7, description: 'Movies'},
    {id: 14, date: '2024-06-07', amount: 50.00, category_id: 5, description: 'Appointment'},
    {id: 15, date: '2024-06-08', amount: 4.50, category_id: 4, description: 'Coffee'},
    {id: 16, date: '2024-6-10', amount: 20.00, category_id: 1, description: 'Phone plan'},
  ]);
};
