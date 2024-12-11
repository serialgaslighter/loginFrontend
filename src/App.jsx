import { UserProvider } from "./utils/UserContext";
import { Login } from './components/Login';
import './App.scss'

function App() {

  return (
    <>
      <UserProvider>
        <Login />
      </UserProvider>
    </>
  )
}

export default App
