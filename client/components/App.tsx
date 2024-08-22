import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"

function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
         Expenses
        </h1>
        <section>
          <ExpenseList/>
          <ExpenseForm />
        </section>
      </div>
    </>
  )
}

export default App
