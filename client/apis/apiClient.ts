import request from 'superagent'
import { Expense, ExpenseData } from '../../models/expenses'

const rootURL = 'api/v1/expenses'

export async function fetchExpenses(): Promise<Expense[]> {
  const res = await request.get(rootURL)
  return res.body // as Expense[]
}

export async function fetchExpenseById(id: number): Promise<Expense> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addNewExpense(newExpense: ExpenseData){
    await request.post(rootURL).send(newExpense)
}