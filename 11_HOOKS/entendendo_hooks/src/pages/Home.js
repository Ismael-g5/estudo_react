import React from 'react'
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef';
import HookUseMemo from '../components/HookUseMemo';
import HookUseEffectLayout from '../components/HookUseEffectLayout';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
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
      <HookUseMemo />
      <HookUseEffectLayout />
      <HookUseImperativeHandle />
    </div>
  )
}

export default Home
