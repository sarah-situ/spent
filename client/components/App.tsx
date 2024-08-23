import { Outlet } from "react-router-dom"
import Header from './Header'

function App() {
  // const { data } = useFruits()

  return (
    <>
    <Header/>
      <div className="app">
     
        <section>
        <Outlet />
        </section>
      </div>
    </>
  )
}

export default App
