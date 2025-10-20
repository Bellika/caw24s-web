import { useState } from "react"
import { UserContext } from "../context/UserContext"
import type { ReactNode } from "react"

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  const login = (username: string) => setUser(username)
  const logout = () => setUser(null)

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
