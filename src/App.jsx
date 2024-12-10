import { UserProvider } from "./utils/UserContext";
import { Login } from './components/Login';

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
