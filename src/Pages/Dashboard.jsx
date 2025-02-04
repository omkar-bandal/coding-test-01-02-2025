import React from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


function Dashboard() {
     const navigate = useNavigate();
        const logoutNavigation = () => {
            navigate('/');
          };
  return (
    <div>
      Dashboard
      <header className="App-header">
        <span>
          
          <a
            className="App-link"
            onClick={logoutNavigation}
            href=""
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Log Out
          </a>
        </span>
      </header>
    </div>
  )
}

export default Dashboard
