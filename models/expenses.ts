export interface Expense{
    id: number,
    user_id: number,
    category_id: number,
    date: Date,
    description: string,
    amount: number,
}