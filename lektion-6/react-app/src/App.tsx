import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import LoginPage from "./pages/Login"
import ProfilePage from "./pages/Profile"
import UserProvider from "./providers/UserProvider"

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/todo">Todo</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App
