//import {useContext} from 'react';

//import { CounterContext } from '../context/CounterContext';

import ChangeCount from '../components/ChangeCount';

// 4 - refatorando o context com hook
import { useCounterContext } from '../hooks/UseCounterContext';

export const order = 0; // Home vem primeiro
//export const menu = false; a Home se descomentado, não aparece no menu

const Home = () => {
  
  const {count} = useCounterContext();
  return (
    <div><h1>Home</h1>
    <div>Valor do contador: {count}</div>

    {/* 3 - alterando o valor do context provider - counter*/}
    <ChangeCount/>
    
    
    </div>

    
  )
}

export default Home
