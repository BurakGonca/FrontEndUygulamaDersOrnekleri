import React from 'react'
import '../assets/style/index.css'
import '../assets/style/main.scss'
import Image from "../assets/img/image2.jpg";

const Main = () => {
  return (
    <div className='main-container'>

   
      <img className='main-image' src={Image} alt="image" />
      
    </div>
  )
}

export default Main