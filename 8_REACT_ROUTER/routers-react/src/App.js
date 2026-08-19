import './App.css';
// 1 config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// pages
import Home from './pages/Home.js';
import About from './pages/About.js';

//components
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
