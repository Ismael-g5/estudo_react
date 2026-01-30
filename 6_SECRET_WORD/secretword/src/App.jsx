import { useState, useCallback, useEffect, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartScreen from './components/StartScreen'
//Hooks Nativos React

//data - palavras
import {wordsList} from './data/words';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StartScreen/>
    </>
  )
}

export default App
