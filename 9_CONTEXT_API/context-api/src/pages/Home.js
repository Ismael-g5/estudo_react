//import {useContext} from 'react';

//import { CounterContext } from '../context/CounterContext';

import ChangeCount from '../components/ChangeCount';

// 4 - refatorando o context com hook
import { useCounterContext } from '../hooks/UseCounterContext';
// 5 - Context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export const order = 0; // Home vem primeiro
//export const menu = false; a Home se descomentado, não aparece no menu

const Home = () => {
  const { color, dispatch } = useTitleColorContext();

  const { count } = useCounterContext();

  // alterando a cor - mais complexo
  const setTitleColor = (color) => {
    //dispatch({ type: 'CHANGE_COLOR', payload: color }); - esse seria o caso onde a cor ia ser passada na mão, la no switch
    dispatch({ type: 'CHANGE_COLOR', payload: color });

  }

  return (
    <div><h1 style={{ color: color }}>Home</h1>
      <div>Valor do contador: {count}</div>

      {/* 3 - alterando o valor do context provider - counter*/}
      <ChangeCount />

      {/* 6 - alterando a cor do título - mais complexo */}
      <button onClick={() => setTitleColor('red')}>Red</button>
      <button onClick={() => setTitleColor('blue')}>Blue</button>
      <button onClick={() => setTitleColor('green')}>Green</button>
    </div>


  )
}

export default Home
