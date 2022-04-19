import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className="nav-links">
                <li className="nav-link"> Home </li>
                <li className="nav-link"> About </li>
                <li className="nav-link"> Resume </li>
                <li className="nav-link"> Projects </li>
                <li className="nav-link"> Contact </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar