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
    <><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <h1 className="text-4xl font-bold leading-snug">
         Expenses
        </h1>
    <Expense expenses={expenses} />
    </div>
</>
  )
}
