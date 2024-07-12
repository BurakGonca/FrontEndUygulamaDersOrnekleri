import { useState } from 'react'
import Navi from "./components/Navi";
import Forms from "./components/Forms";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
      <Forms/>
    </>
  )
}

export default App
