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

export async function deleteExpense(id: number) {
    return db('expenses').where({ id }).del()
}

export async function listExpensesBydate(): Promise<Expense[]> {
    const expenses = await db('expenses')
    .select('id', 'name', 'amount', 'date', 'categories.name as category')
    .join('categories', 'expenses.category_id', '=', 'categories.id')
        //   .groupBy(db.raw('EXTRACT(MONTH FROM date)'))
        //   .orderBy(await db.raw('EXTRACT(YEAR FROM date)'), 'asc')
        //   .orderBy(await db.raw('EXTRACT(MONTH FROM date)'), 'asc')
          .groupBy(db.raw('strftime("%m", date)'))
            .orderBy(await db.raw('strftime("%Y", date)'), 'asc')
            .orderBy(await db.raw('strftime("%m", date)'), 'asc')
        return expenses as Expense[];
      }

export async function getTotalByMonth(): Promise<Expense[]> {
        const expenses = await db('expenses')
          .select('categories.name as category', 
                  db.raw('EXTRACT(MONTH FROM date)'), 
                  db.raw('SUM(amount) as total'))
          .join('categories', 'expenses.category_id', '=', 'categories.id')
          .groupBy('categories.name', db.raw('EXTRACT(MONTH FROM date)'))
          .orderBy(await db.raw('EXTRACT(YEAR FROM date)'), 'asc')
          .orderBy(await db.raw('EXTRACT(MONTH FROM date)'), 'asc')
      
        return expenses as Expense[]
          }