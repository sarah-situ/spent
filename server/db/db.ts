import connection from './connection'
import { Expense } from '../../models/expenses'

const db = connection

// get all expenses
export function getExpenses(): Promise<Expense[]> {
    return db('expenses').select()
}

// return a single expense by id
export function getExpenseById(id: number): Promise<Expense>{
    return db('expenses').where({id}).select().first()
}

// return expenses by particular date
export function getExpensesByDate(date: Date): Promise<Expense[]> {
    const dateString = date.toISOString().split('T')[0];
    return db('expenses').select('*').where({date: dateString})
}
// delete expense by id
export function deleteExpense(id: number) {
    return db('expenses').where({id}).del()
}

// add new expense
export function addExpense(addNewExpense: Expense) {
    const user_id = 1 //Hardcoded user_id
    
    //convert date to YYYY-MM-DD string to exclude time
    const formatDate = new Date(addNewExpense.date).toISOString().split('T')[0];

    const expenseWithUserId = {
        ...addNewExpense,
        date: formatDate,
        user_id: user_id,
    }
    return db('expenses').insert(expenseWithUserId)
}