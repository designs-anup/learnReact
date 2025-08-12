import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

const MyHeadPhoneHeader = (props) => {
  const {children} = props

  console.log(props);
  
  return(
    <>
      <h1 className="text-lg text-green-400 bg-red-700 border-2 border-cyan-400">Welcome To My Headphone Store</h1>
      <p>{children}</p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <h1>My Head Phone Store</h1>

      <MyHeadPhoneHeader>
        This is all about headphone store description sample content
      </MyHeadPhoneHeader>

    </>
  )
}

export default App
