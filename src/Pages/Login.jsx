import React, {useEffect} from "react"
import "../stylesheet/Login.css"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/');
      };
      const signUpNavigation = () => {
        navigate('/Regitration');
      };


    //   const [userLogged, setUserLogged] = useState(
    //     JSON.parse(localStorage.getItem("userLogged"))
    //   );
    
    //   useEffect(() => {
    //     localStorage.setItem("userLogged", JSON.stringify(userLogged));
    //   }, [userLogged]);

  return (
    <>
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="btn" />
        </form>
        <a className="link"
        onClick={handleNavigation}
        >
          Go to Sign Up
        </a>
        <a className="link"
        onClick={signUpNavigation}
        >
          Register
        </a>
      </div>
    </>
  )
}

export default Login
