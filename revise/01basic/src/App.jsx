import { useState } from 'react'
import './App.css'
import Chai from './Chai'

function App() {
  const [count, setCount] = useState(0)
  const myName = "Anup"

  return (
    <>
      <h1>Hello World : {myName}</h1>
      <Chai />
    </>
  )
}

export default App
