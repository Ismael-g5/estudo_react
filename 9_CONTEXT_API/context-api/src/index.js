import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//context provider
import { CounterContextProvider } from './context/CounterContext';

// useReducer -> mais de um dado por vez
import { TitleColorContextProvider } from './context/TitleColorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* criando provider*/}
    <CounterContextProvider>
      <TitleColorContextProvider>
      <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
