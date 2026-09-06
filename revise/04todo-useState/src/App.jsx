import { useState } from 'react'
import './App.css'

function App() {
  const [todoInput, setTodoInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("input value is : ",todoInput)
  }
  return (
    <>
      <h2>Learn Todo - useState hooks</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={(e) => setTodoInput(e.target.value)} 
          value={todoInput} 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        <li>Show todo list</li>
      </ul>
    </>
  )
}

export default App
