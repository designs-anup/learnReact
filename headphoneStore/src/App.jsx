import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

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
        This is all about headphone store description sample content ....
      </MyHeadPhoneHeader>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </>
  )
}

export default App
