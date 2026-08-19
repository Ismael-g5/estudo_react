import { useState, useEffect } from "react";

// Custom Hook: concentra a lógica de requisições HTTP
// O App só consome o que este hook devolve (data + httpConfig + loading + error)
export function useFetch(url) {

    // data = lista de produtos que vem da API (GET)
    // começa null; o App usa "items && items.map" para não quebrar antes do carregamento
    const [data, setData] = useState(null);

    // ---- estados usados no POST ----
    // config = opções do fetch (method, headers, body)
    const [config, setConfig] = useState(null);
    // method = "POST" (ou null). Quando muda, dispara o useEffect do POST
    const [method, setMethod] = useState(null);
    // callFetch = "sinal" após POST/DELETE terminar.
    // quando muda, o useEffect do GET roda de novo e atualiza a lista
    const [callFetch, setCallFetch] = useState(false);
    // itemId = id de UM produto a excluir (DELETE)
    const [itemId, setItemId] = useState(null);
    // itemIds = lista de ids para excluir todos (DELETE_ALL)
    const [itemIds, setItemIds] = useState([]);

    // Loading: true enquanto a requisição está em andamento
    const [loading, setLoading] = useState(false);

    // Error: guarda a mensagem se o GET/POST falhar
    const [error, setError] = useState(null);

    // App chama (não faz fetch aqui — só prepara estados):
    // httpConfig(product, "POST")                    → cadastrar
    // httpConfig({ id, name, price }, "PUT"|"PATCH") → editar
    // httpConfig(id, "DELETE")                       → excluir 1
    // httpConfig([id1, id2], "DELETE_ALL")           → excluir todos
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        } else if (method === "PUT" || method === "PATCH") {
            // data = { id, name, price }
            // o id vai na URL; o resto vai no body
            const { id, ...body } = data;
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            setMethod(method);
            setItemId(id);
        } else if (method === "DELETE") {
            // data aqui é o id do produto
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setMethod(method);
            setItemId(data);
        } else if (method === "DELETE_ALL") {
            // data aqui é um array de ids
            setConfig({
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setMethod(method);
            setItemIds(data);
        }
    };

    // =========================
    // GET — buscar a lista
    // =========================
    // Roda:
    // 1) na montagem do componente
    // 2) quando url muda
    // 3) quando callFetch muda (depois de um POST bem-sucedido)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // limpa erro anterior antes de tentar de novo
            setError(null);

            try {
                const response = await fetch(url); // GET simples

                // se a API responder com erro HTTP (404, 500...), força o catch
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados");
                }

                const json = await response.json();
                setData(json); // atualiza a lista → App re-renderiza com items novos
            } catch (err) {
                // cai aqui se: API offline, URL errada, rede sem internet, etc.
                console.log(err.message);
                setError("Houve um erro ao carregar os dados!");
            } finally {
                // finally: roda com sucesso OU erro → sempre desliga o loading
                setLoading(false);
            }
        };

        fetchData();
    }, [url, callFetch]); // callFetch é o elo: POST → muda callFetch → GET de novo

    // =========================
    // POST / DELETE — mutações
    // =========================
    // Roda quando config, method, itemId ou itemIds mudam
    useEffect(() => {
        const httpRequest = async () => {
            setLoading(true);
            setError(null);

            try {
                if (method === "POST") {
                    const response = await fetch(url, config);

                    if (!response.ok) {
                        throw new Error("Erro ao cadastrar o produto");
                    }

                    const json = await response.json();
                    setCallFetch(json);
                }

                if (method === "PUT" || method === "PATCH") {
                    // PUT  /products/:id → substitui o objeto inteiro
                    // PATCH /products/:id → atualiza só os campos do body
                    const response = await fetch(`${url}/${itemId}`, config);

                    if (!response.ok) {
                        throw new Error("Erro ao atualizar o produto");
                    }

                    const json = await response.json();
                    setCallFetch(json);
                }

                if (method === "DELETE") {
                    // json-server: DELETE /products/:id
                    const response = await fetch(`${url}/${itemId}`, config);

                    if (!response.ok) {
                        throw new Error("Erro ao excluir o produto");
                    }

                    const json = await response.json();
                    setCallFetch(json);
                }

                if (method === "DELETE_ALL") {
                    // json-server não tem "apagar todos": faz 1 DELETE por id
                    for (const id of itemIds) {
                        const response = await fetch(`${url}/${id}`, config);

                        if (!response.ok) {
                            throw new Error("Erro ao excluir os produtos");
                        }
                    }

                    setCallFetch({});
                }
            } catch (err) {
                console.log(err.message);
                if (method === "POST") {
                    setError("Houve um erro ao cadastrar o produto!");
                } else if (method === "PUT" || method === "PATCH") {
                    setError("Houve um erro ao atualizar o produto!");
                } else {
                    setError("Houve um erro ao excluir!");
                }
            } finally {
                setLoading(false);
            }
        };

        if (
            method === "POST" ||
            method === "PUT" ||
            method === "PATCH" ||
            method === "DELETE" ||
            method === "DELETE_ALL"
        ) {
            httpRequest();
        }
    }, [config, method, url, itemId, itemIds]);

    // O que o App recebe:
    // data → lista (renomeada para items no App)
    // httpConfig → função para disparar o POST
    // loading → estado para mostrar indicador de carregamento
    // error → mensagem de erro (ou null se estiver ok)
    return { data, httpConfig, loading, error };
}
