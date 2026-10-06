import React from 'react'
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef';
import { useContext } from 'react';

//useContext
import { SomeContext } from '../components/HookUseContext';
import HookUseCallback from '../components/HookUseCallback';

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>useContext</h2> 
      <p>Valor do Context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
    </div>
  )
}

export default Home
