import React from 'react'
import Brand from '../assets/img/brand.png'
import '../assets/style/navi.scss'

const Navi = ({navHead}) => {
  return (
    
    <nav>

      <div className="brand">
        <img src={Brand} alt="" />
        <h3>{navHead}</h3>

      </div>
      <ul className='liste'>
        <li>Yazılım</li>
        <li>Tarih</li>
        <li>Roman</li>
        <li>Finans</li>
        <li>Diğer</li>
      </ul>

    </nav>
    

  )
}

export default Navi