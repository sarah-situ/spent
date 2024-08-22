interface Expense {
  category_name: string
  date: Date
  description: string
  amount: number
}

interface Props {
  expenses: Expense[]
}

export default function Expense({expenses}: Props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) =>(
          <tr key={index}>
            <td>{exp.date}</td>
            <td>{exp.category_name}</td>
            <td>{exp.description}</td>
            <td>${exp.amount.toFixed(2)}</td>
            {/* Ensure the amount is formatted with two decimal places */}
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
