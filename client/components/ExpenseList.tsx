import { Expense } from '../../models/expenses'

export default function ExpenseList() {
  const expenses = [
    //dummy data
    {
      id: 1,
      user_id: 1,
      category_id: 1,
      date: '2024-08-01',
      description: 'Lunch at cafe',
      amount: 20.0,
    },
    {
      id: 2,
      user_id: 1,
      category_id: 2,
      date: '2024-08-01',
      description: 'Gas for car',
      amount: 50.0,
    },
    {
      id: 3,
      user_id: 1,
      category_id: 1,
      date: '2024-08-01',
      description: 'Groceries',
      amount: 15.0,
    },
    {
      id: 4,
      user_id: 1,
      category_id: 3,
      date: '2024-08-01',
      description: 'Rent',
      amount: 1000.0,
    },
  ] as unknown as Expense[]

  return (
    <>
      {expenses.map((exp, i) => {
        return (
            <div key={i}>
          <p >
            {exp.date}
            {exp.category_id}
            {exp.description}
            ${exp.amount}
          </p>
          </div>
        )
      })}
    </>
  )
}
