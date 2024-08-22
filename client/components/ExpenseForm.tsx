import { useState } from 'react'
import { ExpenseData } from '../../models/expenses'
import { useMutation } from '@tanstack/react-query'
import { addNewExpense } from '../apis/apiClient'
 
export default function ExpenseForm() {
  // const [newExpense, setNewExpense] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const addMutation = useMutation({
    mutationFn: (expense: ExpenseData) => addNewExpense(expense),
  })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewExpense(e.target.value)
  

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault()

    const expenseData: ExpenseData ={
      category_id: Number(category),
      date: new Date(date),
      description,
      amount: parseFloat(amount)
    }
    // onSubmit({ category, description, amount, date })
   
    addMutation.mutate(expenseData)
    setCategory('')
    setDescription('')
    setAmount('')
    setDate('')
  }

  if (addMutation.isSuccess){
    return <p>Submitted: {description} ${amount}</p>
  }
  // console.log(description)

  return (
    <>
    <h2 className="text-4xl font-bold leading-snug">Add New Expense</h2>
      <p>{description}</p>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="number"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Expense Name:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}

