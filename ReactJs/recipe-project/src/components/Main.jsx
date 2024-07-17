import React from 'react'
import '../assets/style/index.css'
import '../assets/style/main.scss'
import Image from "../assets/img/image.jpg";

const Main = () => {
  return (
    <div>

    <h2>Welcome to the Recipe Sharing Platform</h2>
    <h4>Find and share the best recipes from around the world!</h4>
   
      <img className='image' src={Image} alt="image" />
      
    </div>
  )
}

export default Main