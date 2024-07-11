import React from 'react'
import Brand from '../assets/img/brand.png'
import '../assets/style/navi.scss'

const Navi = ({navHead,kategoriler,setSecilenKategori}) => {
  return (
    
    <nav>

      <div className="brand">
        <img src={Brand} alt="" />
        <h3>{navHead}</h3>

      </div>
      <ul className='liste' >
       {
        kategoriler.map(kategori=>
          <li onClick={(e)=>setSecilenKategori(e.target.innerText)} key={kategori.kategoriId}>{kategori.kategoriAdi}</li>
        )
       }
      </ul>

    </nav>
    

  )
}

export default Navi