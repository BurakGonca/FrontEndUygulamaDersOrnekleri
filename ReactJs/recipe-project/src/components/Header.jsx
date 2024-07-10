import React from 'react'
import '../assets/style/header.scss'
import Logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <nav>

      <div className="brand">
        <img src={Logo} alt="" />
        <h3>Recipe Platform</h3>

      </div>
      <ul className='liste'>
        <li>Home</li>
        <li>Add Recipe</li>
        <li>About</li>
       
       
      </ul>

    </nav>
  )
}

export default Header