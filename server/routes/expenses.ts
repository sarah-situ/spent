import { Router } from 'express'
import * as db from '../db/expense.ts'


const router = Router()

//GET 'api/v1/expenses'

router.get('/', async (req, res) => {
  try {
    const expenses = await db.getAllExpenses()
    res.json(expenses)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})


//GET 'api/v1/expenses/:id'
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const expense = await db.getExpenseById(id)
    res.json(expense)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

//POST 'api/v1/expenses/'

router.post('/', async (req, res) => {
  const newExpense = req.body
  try {
    await db.addExpense(newExpense)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

//DEL 'api/v1/videos/:id'

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteExpense(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router