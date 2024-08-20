import request from 'superagent'
import { Expense } from '../../models/expenses'

const rootURL = 'api/v1/expenses'

export async function fetchExpenses(): Promise<Expense[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function fetchExpenseById(id: number): Promise<Expense> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addExpense(newExpense: Expense){
    await request.post(rootURL).send(newExpense)
}