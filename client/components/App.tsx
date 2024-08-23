import { Link, Outlet } from "react-router-dom"
import Header from './Header'

function App() {
  // const { data } = useFruits()

  return (
    <>
    <Header/>
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
