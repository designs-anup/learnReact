import './App.css'
import { Link, Navigate, NavLink, Outlet, useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><button onClick={() => navigate('/signIn')}>Sign In</button></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
