import { useState, useCallback, useEffect, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Hooks Nativos React

//data - palavras
import { wordsList } from './data/words';
import StartScreen from './components/StartScreen'
import GameOver from './components/GameOver'
import Game from './components/Game'


const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];
function App() {
  const [count, setCount] = useState(0);
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //processar o as letras
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category};
    //console.log(word)
  }
  //start do jogo
  const startGame = () => {
   const {word, category} =  pickWordAndCategory();
    // transformar as palavras em letras
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);


    setGameStage(stages[1].name)
  }

  //reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  // fluxo do jogo
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([]);
  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}

    </>
  )
}

export default App
