import Router from 'express'
import * as db from '../db/db'

const router = Router()

//GET 'api/v1/expenses'

router.get('/', async (req, res) => {
  try {
    const expenses = await db.getExpenses()
    res.json(expenses)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

//GET 'api/v1/expenses/:id' - by id

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

//GET 'api/v1/expenses/:date' - fetch expenses by date

router.get('/:date', async (req, res) => {
  const dateParam = req.params.date
  const date = new Date(dateParam)

  // Validate the date format
  if (isNaN(date.getTime())) {
    return res.status(400).json({ error: 'Invalid date format' })
  }

  try {
    const expenses = await db.getExpensesByDate(date)
    if (expenses.length === 0) {
      return res
        .status(404)
        .json({ message: 'No expenses found for the given date' })
    }
    res.json(expenses)
  } catch (error) {
    console.error(`Database error: ${error}`)
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
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//DEL 'api/v1/expenses/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteExpense(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`Database error ${error}`)
    res.sendStatus(500)
  }
})

export default router
