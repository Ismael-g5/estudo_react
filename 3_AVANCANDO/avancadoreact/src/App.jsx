import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender'

//import da imagem em assets
import Img2 from './assets/img2.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Seção 3 - Avançando em React</h1>
      </div>
      {/* imagem em assets*/}
      <div>
        <img src={Img2} alt="" />
      </div>
      <div>
        <ListRender/>
      </div>
    </>
  )
}

export default App
