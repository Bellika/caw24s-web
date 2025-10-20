import { useUser } from "../hooks/useUser"

export default function ProfilePage() {
  const { user } = useUser()

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <p>Welcome, {user}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  )
}
