import './App.css';
// 1 config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Product from './pages/Product.js';
import Info from './pages/Info.js';
import NotFound from './pages/NotFound.js';
import Search from './pages/Search.js';

//components
import NavBar from './components/NavBar.js';
import SearchForm from './components/SearchForm.js';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
      <NavBar />

      {/* Form de busca -> filter params*/}
      <SearchForm />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/**4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />} />

          {/** nested routes */}
          <Route path="/products/:id/details" element={<Info />} />

          {/* Pagina de Busca - Search*/}
          <Route path="/search" element={<Search />} />

          {/** 5 - rota 404 */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
