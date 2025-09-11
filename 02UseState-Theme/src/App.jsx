import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const [count, setCount] = useState(0)

  const lightTheme = {
    backgroundColor: '#fff',
    color: '#000',
    transition: 'all 0.3s ease'
  }

  const darkTheme = {
    backgroundColor: '#121212',
    color: '#fff',
    transition: 'all 0.3s ease'
  }

  return (
    <>

      <div className={darkMode ? 'darkTheme' : 'lightTheme'}>
        <h2>{darkMode ? 'darkTheme' : 'lightTheme'}</h2>
        <h1>{darkMode ? 'DarkMode' : 'LightMode'}</h1>
        <button onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '10px 20px',
            backgroundColor: darkMode ? '#fff' : '#121212',
            color: darkMode ? '#121212' : '#fff',
            transition: 'all 0,.3s ease'
          }}
          >Toggle Theme</button>
        </div>
      <div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
