import { useState } from 'react'
import { ExpenseData } from '../../models/expenses'
import { useMutation } from '@tanstack/react-query'
import { addNewExpense } from '../apis/apiClient'

export default function ExpenseForm() {
  const [category] = useState([
    { id: 1, name: 'Food' },
    { id: 2, name: 'Housing' },
    { id: 3, name: 'Transportation' },
    { id: 4, name: 'Healthcare' },
    { id: 5, name: 'Insurance' },
    { id: 6, name: 'Debt Payments' },
    { id: 7, name: 'Savings & Investments' },
    { id: 8, name: 'Personal Care' },
    { id: 9, name: 'Entertainment' },
    { id: 10, name: 'Education' },
    { id: 11, name: 'Travel' },
    { id: 12, name: 'Miscellaneous' },
  ])
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const addMutation = useMutation({
    mutationFn: (expense: ExpenseData) => addNewExpense(expense),
  })

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault()

    const expenseData: ExpenseData = {
      category_id: Number(selectedCategoryId),
      date: new Date(date),
      description,
      amount: parseFloat(amount),
    }

    addMutation.mutate(expenseData)
    setSelectedCategoryId('')
    setDescription('')
    setAmount('')
    setDate('')
  }

  if (addMutation.isSuccess) {
    return (
      <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {description} {amount}Submitted!
      </p>
    )
  }
  console.log(description)

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold leading-snug">Add New Expense</h2>
        {/* <p>{description}</p> */}
        <form onSubmit={handleSumbit}>
          <div className="">
            <label htmlFor="category">Category:</label>
            <select
              className="text-black-900 block w-[300px] h-[41px] m-2 rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              id="category"
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description">Expense Name:</label>
            <input
              className="text-black-900 block w-[300px] h-[41px] m-2 rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
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
              className="text-black-900 block w-[300px] h-[41px] m-2 rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
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
              className="text-black-900 block w-[300px] h-[41px] m-2 rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
          <button className="m-5 mb-2 me-2 rounded-full bg-green-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 content-center">
            Submit
          </button>
          </div>
        </form>
      </div>
    </>
  )
}
