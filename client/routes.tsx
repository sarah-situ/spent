import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import ExpenseForm from './components/ExpenseForm.tsx'
import ExpenseList from './components/ExpenseList.tsx'

export default createRoutesFromElements(
    <Route path="/" element={<App />}>
<Route index element={<Home />} />
 
 <Route path="/expense-form" element={<ExpenseForm/>} />
    <Route path="/expense-list" element={<ExpenseList />} />
  </Route>,
)
