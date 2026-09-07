import { useState } from 'react'
import './App.css'
import ControlledInput from './components/ControlledInput'
import UncontrolledInput from './components/UncontrolledInput'
import UserForm from './components/UserForm'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const handleTodo = (e) => {
    e.preventDefault()
    if(!todoInput.trim()){ alert("please fill..."); return }
    //console.log("todo input value is : ",todoInput)
    setTodoList([...todoList, todoInput])
    setTodoInput('')
  }
  //console.log("todo List data : ", todoList)
  return (
    <>
      <h2>Practice Todo App</h2>
      <form onSubmit={handleTodo}>
        <input 
          type='text' 
          value={todoInput} 
          onChange={(e) => setTodoInput(e.target.value)} 
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ControlledInput/>

      <UncontrolledInput/>

      <UserForm/>
    </>
  )
}

export default App
