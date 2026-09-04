import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import BiblicalPassages from './pages/BiblicalPassages';

//Components
import NavBar from './components/NavBar'; 

//Logica das Rotas automaticas
import { autoRoutes } from './autoRoutes'; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {autoRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
