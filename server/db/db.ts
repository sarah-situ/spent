import connection from './connection'
import { Expense } from '../../models/expenses'

const db = connection

// get all expenses
export function getExpenses(): Promise<Expense[]> {
    return db('expenses').select()
}
console.log('hello')
// return a single expense by id
export function getExpenseById(id: number): Promise<Expense>{
    return db('expenses').where({id}).select().first()
}

// return expenses by particular date
export function getExpensesByDate(date: Date): Promise<Expense[]> {
    return db('expenses').select().where({date})
}

// delete expense by id
export function deleteExpense(id: number) {
    return db('expenses').where({id}).del()
}

//