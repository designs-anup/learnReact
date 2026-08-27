import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Props Learning</h1>
      <Card username='Mohan' email='mohan@gmail.com' />
      <Card username='Rahul' email='rahul@ymail.com' />
      <Card username='Ganu' />
    </>
  )
}

export default App
