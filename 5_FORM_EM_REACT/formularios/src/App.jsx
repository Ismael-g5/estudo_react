import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Forms</h2>
      </div>
      <div><MyForm user={{ name: "Ismael", email: "ismaelguedessilva@gmai.com"}}/></div>
    </>
  )
}

export default App
