import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className="nav-links">
                <li className="nav-link"><a href='#hme'>Home</a></li>
                <li className="nav-link"><a href='#abt'>About</a></li>
                <li className="nav-link"><a href='#res'>Resume</a></li>
                <li className="nav-link"><a href='#pjt'>Projects</a></li>
                <li className="nav-link"><a href='#con'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar