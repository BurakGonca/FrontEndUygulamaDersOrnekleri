import React from 'react'
import '../assets/style/card.scss'

const Card = (props) => {
 
  



  return (
    
    <div className='card'>
      <button className='delete'>Sil</button>
      <button className='edit'>Düzenle</button>
      <img src={props.kitap.kitapResmi} alt={props.kitap.KitapAdi} />
      <div className='card-body'>
        <h4>{props.kitap.kitapAdi}</h4>
        <p>Yazar: {props.kitap.kitapYazari}</p>
        <p>Kategori: {props.kitap.kitapKategorisi}</p>
        <p>Sayfa Sayısı: {props.kitap.kitapSayfaSayisi}</p>
        <p>Açıklaması:{props.kitap.kitapAciklamasi.substring(0,100)}</p>

      </div>


    </div>

  )
}

export default Card