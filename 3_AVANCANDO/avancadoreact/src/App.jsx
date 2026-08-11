import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

//import da imagem em assets
import Img2 from './assets/img2.jpg'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import ExecuteFunction from './components/ExecuteFunction'
import FourActive from './components/FourActive'

function App() {
  const [count, setCount] = useState(0)
  const userName = useState('Ismael Guedes da Silva')

  const showMessage = () => {
    console.log('show message(evento do componente pai)');
  }

  const cars = []
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
      <div><ConditionalRender/></div>
      {/*props*/}
    <div><ShowUserName name={userName}/></div>
    
    {/*destructuring*/}
    <div><CarDetails  key="1" brand="Toyota" km={20000} color="black" /></div>
    <div><ExecuteFunction myFunction={showMessage}/></div>
    
    <div><FourActive/></div>
    </>
  )
}

export default App
