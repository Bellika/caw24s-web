import { useState } from "react"
import { useUser } from "../hooks/useUser"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const { user, login, logout } = useUser()

  const handleLogin = () => {
    if (!username.trim()) return
    login(username)
    setUsername("")
  }

  return (
    <div>
      <h1>Login Page</h1>
      {user ? (
        <>
          <p>Logged in as: {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  )
}
