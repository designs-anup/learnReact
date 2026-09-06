import { useState } from 'react'
import './App.css'

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!todoInput.trim()){ alert("input field can not be empty"); return }
    //console.log("input value is : ",todoInput)

    setTodoList([...todoList, todoInput])
    setTodoInput('')
  }

  //console.log("toto Li data : ",todoList)

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
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
