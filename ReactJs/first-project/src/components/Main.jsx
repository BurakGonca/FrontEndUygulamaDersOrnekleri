import React from 'react'

const Main = () => {
  return (
    <ol>
      <li>Componentin return ü içindeki html benzeri yapi (jsx) mutlaka fragment (bir kapsayici) içerisine yazılmalıdır </li>

      <li >JSX yapisi icerisinde süslü parantex içerisinde JS kodları yazılmasına olanak tanınır. 2+4={2+4}</li>

      <li style={{color:"red",fontSize:"25px"}}>JSX içerisinde inline css yazmak için çift süslü parantez kullanılır {`style={{JS olarak css kodu}}`}</li>



    </ol>

  )
}

export default Main