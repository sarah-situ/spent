import { useQuery } from '@tanstack/react-query'

import { fetchExpenses } from '../apis/apiClient'
import Expense from './Expense'

export default function ExpenseList() {
  const {
    data: expenses,
    isPending,
    isError,
  } = useQuery({ queryKey: ['expenses'], queryFn: () => fetchExpenses() })

  if (isError) {
    return <p>Error...</p>
  }
  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      {expenses.map((exp, i) => {
        return <Expense key={i} date={exp.date} description={exp.description} amount={exp.amount} />
      
      })}
    </>
  )
}
