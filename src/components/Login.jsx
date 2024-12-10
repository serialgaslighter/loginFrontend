import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import './Login.scss';

export const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [ emailOrUsername, setEmailorUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
  
    if (!emailOrUsername || !password) {
      setError("Beide Felder sind erforderlich.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setError(data.msg || "Etwas ist schiefgelaufen.");
        return;
      }
  
      if (data.msg === "Login successful.") {
        setIsLoggedIn(true);
        setEmailorUsername("");
        setPassword("");
        console.log("Login erfolgreich!");
      } else {
        setError(data.msg || "Login fehlgeschlagen.");
      }
  
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("Logout erfolgreich!");
  };

  return (
    <div className="login-container">
      <h2>
        {isLoggedIn ? "Welcome" : "Login"}
      </h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username/Email</label>
        <input 
          type="text"
          placeholder="Enter Username or Email"
          value={emailOrUsername}
          onChange={e => setEmailorUsername(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p>By {isLoggedIn? "login" : "registering"} you agree to our <a href="">Terms & Conditions</a></p>
        <div className="button-and-link">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button type="submit">Login now</button>
          )}
          <a href="">Forgot Password?</a>
        </div>
      </form>
    </div>
  )
}