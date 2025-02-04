import React, { useState } from "react"
import "../stylesheet/Login.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"

function Regitration() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  })

  const handleInput = e => {
    const { name, value } = e.target
    console.log("name", name)

    setInput(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const navigate = useNavigate()
  const rootNavigation = () => {
    localStorage.setItem("name", name.value)
    localStorage.setItem("pw", pw.value)
    navigate("/")
  }
  return (
    <div>
      <div className="login">
        <h4>Register</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"
              onChange={handleInput}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"
              onChange={handleInput}
            />
          </div>
          <input type="submit" value="REGISTER" className="btn" />
        </form>
        <a className="link" onClick={rootNavigation}>
          Register
        </a>
      </div>
    </div>
  )
}

export default Regitration
