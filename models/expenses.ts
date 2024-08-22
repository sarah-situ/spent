export interface ExpenseData{
    category_id: number,
    date: Date,
    description: string,
    amount: number,
}
export interface Expense extends ExpenseData{
    category_name: string;
    id: number,
    user_id: number,
}