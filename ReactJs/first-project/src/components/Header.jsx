//class components

//rcc>tab (class component)

// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }


//rce>tab (class component : exportu sona atan)

// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <div>Header</div>
//     )
//   }
// }

// export default Header



//Functional Components

//rfc>tab


// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }


//rfce>tab (exportu sona alıyor)

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header


// rafce>tab (en çok kulanacağımız)

import React from 'react'

const Header = () => {
  return (
    <div>BAŞLIK</div>
  )
}

export default Header