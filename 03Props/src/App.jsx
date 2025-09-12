import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './components/Students'

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value/>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Students name='Rohit' age={20} isStudent={true}/>
      <Students name='Shyam' age={30} isStudent={false}/>
      <Students name='Amit' age={18} isStudent={true}/>

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
