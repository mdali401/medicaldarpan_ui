import React from 'react'
import { CgProfile } from 'react-icons/cg';
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <div></div>
            <h2>Medical Darpan</h2>
        </div>
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Distributors</a></li>
                <li><a>Manufacturers</a></li>
                <li><a>About us</a></li>
                <li><a>Blog</a></li>
            </ul>
        </nav>
        <div className="user_info">
            <ul>
                <li><a>Login</a></li>
                <li className='icon'><CgProfile /></li>
            </ul>
        </div>
    </header>
  )
}

export default Header