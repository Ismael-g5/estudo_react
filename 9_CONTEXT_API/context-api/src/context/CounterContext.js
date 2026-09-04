// 1 - criar context
import { createContext } from "react";
import { useState } from 'react';

export const CounterContext = createContext();

// 2 - criar provider
export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(5);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};