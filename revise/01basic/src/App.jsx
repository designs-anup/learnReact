import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myName = "Anup"

  return (
    <>
      <h1>Hello World : {myName}</h1>
    </>
  )
}

export default App
