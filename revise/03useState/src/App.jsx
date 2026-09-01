import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('#f0f0f0')

  return (
    <>
      <div style={{backgroundColor: color, color: '#eee', width: '100%', height: '100vh', padding: '0', margin: '0'}}>
        <h1>Change Background Color</h1>

        <nav>
          <button onClick={() => {setColor('#ff0000')}}>Red</button>
          <button onClick={() => {setColor('#00ff00')}}>Green</button>
          <button onClick={() => {setColor('#0000ff')}}>Blue</button>
        </nav>
      </div>
    </>
  )
}

export default App
