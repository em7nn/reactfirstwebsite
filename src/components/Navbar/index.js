import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <nav>
    <div className='mainnavdiv'>
     <div className='nav_icon'>
      <h3>Start Bootstrap</h3>
     </div>
     <div className='hamburger_menu'>
     <i className="fa-solid fa-bars"></i>
     </div>
     <div className='linkler'>
     <ul>
        <Link className='stil' to="/">Home</Link> 
        <Link className='stil' to="/about">About</Link>
        <Link className='stil' to="/Contact">Contact</Link>
        <Link className='stil' to="/Pricing">Pricing</Link>
        <Link className='stil' to="/FAQ">FAQ</Link>
        <Link className='stil' to="/about">Blog <i class="fa-solid fa-caret-down"></i></Link>
        <Link className='stil' to="/about">Portfolio <i class="fa-solid fa-caret-down"></i></Link>
     </ul>
     </div>
     </div>
    </nav>
  )
}

export default Navbar