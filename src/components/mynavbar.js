import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const mynavbar = () => {
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
          <h1>Applogo</h1>
        </div>
        <div className='menu-link'>
          <ul className='nav-ul'>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/createads">Create ads</Link>
          </li>
          </ul>

        </div>
      </nav>
        
    </div>
  )
}

export default mynavbar