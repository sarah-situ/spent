import db from './connection'
import { Expense } from '../../models/expense'

export async function getAllExpenses() {
    const expense = await db('expenses').select()
    return expense as Expense[]
}

export async function getExpenseById(id: number | string) {
    const expense = await db('expenses').select().first().where({ id })
    return expense as Expense
}

export async function addExpense(expense: Expense): Promise<Expense> {
    const [newExpense] = await db('expenses').insert(expense).returning('*')
    return newExpense as Expense
}