import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
const url = "http://localhost:8000/products";

function App() {
const [products, setProducts] = useState([]);

// resgatando dados
useEffect(() => {
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }
  fetchData();
}, []);

console.log(products);

// o .map aqui é ultilizado semelhante ao for, ele itera sobre cada elemento
// assim eu consigo chamar a key de cada objeto em loop na sequencia
  return (
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


//useEffect(() => {} -> faz com que a ação seja executada assim que o componente for montado,
// tendo em vista que o React recarrega cada ação do componente, o useEffect é utilizado para que a ação seja executada 
// apenas uma vez, quando o componente for montado.

// O useState por sua vez é utilizado para armazenar o estado de uma 
// variável, ou seja, o valor que ela possui em determinado momento.

//FetchApi é uma requisição Assincrona que nasceu no ECMAScript 2015, e é utilizada para fazer 
// requisições HTTP, ou seja, para buscar dados de uma API.