import express from 'express'
import * as Path from 'node:path'

// import { getAllExpenses } from './db/expense.ts'
import { getAllExpenses, listExpensesByMonth }  from './db/expense.ts'


import fruitRoutes from './routes/fruits.ts'
import expensesRoutes from './routes/expenses.ts'


const server = express()
// const expenses = await getAllExpenses()
const result = await listExpensesByMonth(5, 2024);
console.log(result); // This should print the actual result

server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/expenses', expensesRoutes)



if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
