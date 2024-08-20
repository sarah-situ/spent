import { useState } from 'react'

export default function ExpenseForm({onSubmit}) {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')


  const handleSumbit = (e) => {
    e.preventDefault()
    onSubmit({ category, description, amount, date })
    setCategory('')
    setDescription('')
    setAmount('')
    setDate('')
  }

  return (
    <>
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
