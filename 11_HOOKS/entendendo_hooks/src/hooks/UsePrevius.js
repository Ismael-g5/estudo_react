import { useRef, useEffect, useDebugValue } from 'react'


export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("--Custom Hook--");
  useDebugValue(value, (value) => `Valor Anterior: ${value}`)

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;

  }
