import React from 'react';
import './css/Home.css';
import {Link} from "react-router-dom";
import {useFetch} from '../hooks/useFetch.js';

const Home = () => {

    //carregamento de dados
    const url = "http://localhost:3001/products";
    const {data: items, loading, error} = useFetch(url);

    // o return PRECISA de parênteses: senão o JS coloca ; depois do return
    // e a página fica em branco (Automatic Semicolon Insertion)
    return (
        <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
              {/* 4  - rota dinamica */}
              <Link to={`/products/${product.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
    );
}

export default Home;