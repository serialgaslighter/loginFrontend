import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import './Login.scss';

export const Login = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="login-container">
      <h2>
        {isLoggedIn ? "Login" : "Register"}
      </h2>
      <form action="submit">
        <label htmlFor="">Username/Email</label>
        <input type="text" placeholder="Enter Username or Email"/>
        <input type="text" placeholder="Enter Password"/>
        <p>By {isLoggedIn? "login" : "registering"} you agree to our <a href="">Terms & Conditions</a></p>
        <div className="button-and-link">
          <button>
            {isLoggedIn ? "Login now" : "Register now"}
          </button>
          <a href="">Forgot Password?</a>
        </div>
      </form>
    </div>
  )
}