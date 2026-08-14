import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
//importação do custom hook useFetch
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:8000/products";



function App() {
const [products, setProducts] = useState([]);

// hook custom o : ronemeia data para items
const {data: items} = useFetch(url);

const [name, setName] = useState("");
const [price, setPrice] = useState("");

// resgatando dados

// useEffect(() => {
//   async function fetchData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     setProducts(data);
//   }
//   fetchData(); // aqui eu invoco a função
// }, []);

// console.log(products);



// adição de produtos

//função POST
const handleSubmit = async (e) => {
  e.preventDefault();
  const product = { id: String(products.length + 1),
    name, price };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  //carregamento dinamico
  const addedProduct = await response.json();
  setProducts((prevProducts) => [...prevProducts, addedProduct]);

  //torna as strings vazias apos a adição de um novo produto
  setName("");
  setPrice("");
}



// o .map aqui é ultilizado semelhante ao for, ele itera sobre cada elemento
// assim eu consigo chamar a key de cada objeto em loop na sequencia
// o && é uma condicional para quando o 'items' não  
return (
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        
        {items &&items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className="add-product">
        <h2>Adicionar Produto</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome do Produto" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Preço" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" value="Criar">Adicionar</button>
        </form>
      </div>
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