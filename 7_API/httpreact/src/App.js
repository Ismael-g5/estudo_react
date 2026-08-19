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
  // loading / error também vêm do hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // Estados controlados do formulário
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // Se tiver valor, o form está em modo edição (PATCH)
  const [editId, setEditId] = useState(null);

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

    // impede cadastro de produto vazio (nome ou preço em branco)
    if (!name.trim() || !price) {
      return;
    }

    // Objeto enviado no POST.
    // Sem id manual: o json-server gera o id sozinho.
    const product = {
      name: name.trim(),
      price,
    };

    if (editId) {
      // PATCH: atualiza só name/price do produto com aquele id
      // (PUT faria a mesma URL, mas substituiria o objeto inteiro)
      httpConfig({ id: editId, ...product }, "PATCH");
      setEditId(null);
    } else {
      httpConfig(product, "POST");
    }

    setName("");
    setPrice("");
  };

  // Preenche o form com os dados do item clicado
  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
    setPrice(item.price);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setName("");
    setPrice("");
  };

  // Exclui 1 produto: o id vai no 1º argumento, o método no 2º
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  // Exclui todos: manda o array de ids (incluindo vazios, para limpar o db)
  const handleRemoveAll = () => {
    if (!items || items.length === 0) {
      return;
    }

    const ids = items.map((item) => item.id);
    httpConfig(ids, "DELETE_ALL");
  };

  // =========================
  // RENDER
  // =========================
  // items && ... → só faz .map quando items já carregou (não é null)
  // .map → percorre cada produto e gera um <li>
  return (
    <div className="App">
      <h1>Produtos</h1>

      {/* loading: mostra texto enquanto busca; esconde a lista nesse momento */}
      {loading && <p>Carregando dados...</p>}

      {/* error: mensagem vinda do catch do hook */}
      {error && <p>{error}</p>}

      {/* !loading: só renderiza a lista quando o GET terminou */}
      {/* items && : só faz map se items já veio da API (não é null) */}
      {!loading && (
        <>
          <ul>
            {/* filter: remove registros sem nome (ou só com espaços)
                map: só percorre o que passou no filtro */}
            {items &&
              items
                .filter((item) => item.name && item.name.trim() !== "")
                .map((item) => (
                  <li key={item.id}>
                    {item.name} — R$ {item.price}
                    <button onClick={() => handleEdit(item)}>Editar</button>
                    <button onClick={() => handleRemove(item.id)}>Excluir</button>
                  </li>
                ))}
          </ul>

          {items && items.length > 0 && (
            <button onClick={handleRemoveAll}>Excluir todos</button>
          )}
        </>
      )}

      <div className="add-product">
        <h2>{editId ? "Editar Produto" : "Adicionar Produto"}</h2>

        {/* onSubmit chama handleSubmit quando o form é enviado */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Produto"
            required
            value={name} // input controlado pelo estado name
            onChange={(e) => setName(e.target.value)} // atualiza name a cada digitação
          />
          <input
            type="number"
            placeholder="Preço"
            required
            value={price} // input controlado pelo estado price
            onChange={(e) => setPrice(e.target.value)}
          />

          {loading && (
            <button type="submit" disabled>
              {editId ? "Atualizando..." : "Adicionando..."}
            </button>
          )}
          {!loading && (
            <button type="submit">
              {editId ? "Atualizar" : "Adicionar"}
            </button>
          )}
          {editId && !loading && (
            <button type="button" onClick={handleCancelEdit}>
              Cancelar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;

// Resumo do fluxo completo:
// 1) App monta → useFetch faz GET → items aparece na tela
// 2) Form vazio → POST | Form com editId → PATCH
// 3) Hook faz a requisição → muda callFetch → GET de novo → lista atualiza
