import { useState } from "react"

export function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState("")

  function addTodo() {
    if (!input.trim()) return
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
