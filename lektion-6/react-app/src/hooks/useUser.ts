import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import type { UserContextType } from "../types/types"

export function useUser(): UserContextType {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error("useUser must be used within UserProvider")
  return ctx
}
