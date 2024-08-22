import { Link, Outlet } from "react-router-dom"

function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
     
        <section>
        <nav>
        <ul>
          <li><Link to="/expense-form">Add Expense</Link></li>
          <li><Link to="/expense-list">View Expenses</Link></li>
        </ul>
      </nav>
        <Outlet />
        </section>
      </div>
    </>
  )
}

export default App
