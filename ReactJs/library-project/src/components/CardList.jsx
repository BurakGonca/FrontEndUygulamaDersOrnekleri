import React from 'react'
import Card from './Card'

const CardList = ({kitaplar,kitapSil}) => {

  

  return (
    <div className='card-list'>
    
    {
      kitaplar.map(kitap=>
          <Card kitap={kitap} kitapSil={kitapSil} key={kitap.id}/>

      )
    }
    
    </div>
    
  )
}

export default CardList