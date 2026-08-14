import { useState } from 'react'
import './App.css'

function App() {
  // 1. State: The memory of your component
  const [count, setCount] = useState(0)

  // 2. Logic: What happens when an action occurs
  const handleClick = () => {
    setCount(count + 1)
  }

  // Reset Action
  const handleReset = () => {
    setCount(0)
  }

  // 3. UI (JSX): What gets rendered on screen
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to React + Vite! 🚀</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
