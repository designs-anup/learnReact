import { useState } from 'react'
import './App.css'

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoInput.trim() === ''){ alert("please add your plan"); return }
   // console.log("input value : ", todoInput)

    setTodoList([...todoList, todoInput])
    setTodoInput('')
  }
  // console.log("input List value : ", todoList)
  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="whats your plan" 
          value={todoInput} 
          onChange={(e) => {setTodoInput(e.target.value)}}
        />
        <button type="submit">Add</button>
      </form>
      <ul style={{listStyle: 'none'}}>
        {todoList.map((todo,index) => (<li key={index}>{todo}</li>))}
      </ul>
    </>
  )
}

export default App
