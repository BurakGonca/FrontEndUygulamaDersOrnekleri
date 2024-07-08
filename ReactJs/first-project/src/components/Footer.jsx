import React from 'react'
import { age, firstName, image } from '../data'
import '../components/Footer.css'

const Footer = () => {
  return (
    <div>
        {firstName}-{age}
        <div className="flex">
           {
                image.map(resim=>

                    <img src={resim} alt="resim" />
                )
        
           }
        </div>
    </div>
  )
}

export default Footer