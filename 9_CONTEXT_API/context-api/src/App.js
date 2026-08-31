import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import BiblicalPassages from './pages/BiblicalPassages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/biblical-passages" element={<BiblicalPassages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
