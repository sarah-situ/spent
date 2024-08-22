import { useQuery } from '@tanstack/react-query'

import { fetchExpenses } from '../apis/apiClient'
import Expense from './ExpenseTable'

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
    <Expense expenses={expenses} />
</>
  )
}
