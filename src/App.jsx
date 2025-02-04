import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import Login from "./Pages/Login"
import Regitration from "./Pages/Regitration"
import Dashboard from "./Pages/Dashboard"
// import AuthWrapper from "./Authentication/AuthWrappr"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
 
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Regitration" element={<Regitration />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>      
        </div>
      </Router>
    </div>
  )
}

export default App

 {/* <Routes>
            <Route path="/" element={<Login />} />
            <Route path={"/Regitration"} element={<Regitration />} />
            <Route element={<AuthWrapper />}>
              <Route path={"/dashboard"} element={<Dashboard />} />
            </Route>
          </Routes> */}
