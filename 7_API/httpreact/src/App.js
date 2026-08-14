import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// Importa o custom hook. A lógica de fetch/POST fica no hook, não aqui.
import { useFetch } from './hooks/useFetch';

// URL da API (json-server)
const url = "http://localhost:8000/products";

function App() {
  // Estado antigo da lista (não é mais usado na tela).
  // A lista real agora vem do hook como "items".
  const [products, setProducts] = useState([]);

  // =========================
  // USO DO CUSTOM HOOK
  // =========================
  // useFetch(url) devolve:
  //   - data  → lista de produtos da API
  //   - httpConfig → função para configurar/disparar o POST
  //
  // "data: items" = renomeia data para items (só um apelido)
  const { data: items, httpConfig } = useFetch(url);

  // Estados controlados do formulário
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Código antigo de GET (comentado de propósito):
  // antes o App buscava sozinho; agora o hook faz isso.
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // =========================
  // SUBMIT DO FORMULÁRIO
  // =========================
  // O App NÃO faz fetch aqui.
  // Só monta o produto e avisa o hook via httpConfig.
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita reload da página

    // Objeto enviado no POST.
    // Sem id manual: o json-server gera o id sozinho.
    const product = {
      name,
      price,
    };

    // Dispara o fluxo no hook:
    // httpConfig → setConfig/setMethod → useEffect POST → setCallFetch → useEffect GET
    httpConfig(product, "POST");

    // Limpa os inputs depois do envio
    setName("");
    setPrice("");
  };

  // =========================
  // RENDER
  // =========================
  // items && ... → só faz .map quando items já carregou (não é null)
  // .map → percorre cada produto e gera um <li>
  return (
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div className="add-product">
        <h2>Adicionar Produto</h2>

        {/* onSubmit chama handleSubmit quando o form é enviado */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Produto"
            value={name} // input controlado pelo estado name
            onChange={(e) => setName(e.target.value)} // atualiza name a cada digitação
          />
          <input
            type="number"
            placeholder="Preço"
            value={price} // input controlado pelo estado price
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" value="Criar">Adicionar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

// Resumo do fluxo completo:
// 1) App monta → useFetch faz GET → items aparece na tela
// 2) Usuário envia o form → handleSubmit → httpConfig(product, "POST")
// 3) Hook faz POST → muda callFetch → faz GET de novo → lista atualiza sozinha
