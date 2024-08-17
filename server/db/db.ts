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
export function addExpense(newExpense: Expense) {
    return db('expense').insert(newExpense)
}