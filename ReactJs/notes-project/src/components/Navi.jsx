import React from 'react'
import Logo from '../assets/img/logo.png'
import '../assets/style/navi.scss'


const Navi = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-title">
      Not Defteri 
      </div>
    </nav>
  )
}

export default Navi