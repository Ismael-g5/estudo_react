import { useState, useEffect } from "react";

// Custom Hook: concentra a lógica de requisições HTTP
// O App só consome o que este hook devolve (data + httpConfig)
export function useFetch(url) {

    // data = lista de produtos que vem da API (GET)
    // começa null; o App usa "items && items.map" para não quebrar antes do carregamento
    const [data, setData] = useState(null);
    //const[loading, setLoading] = useState(false);
    //const[error, setError] = useState(null);

    // ---- estados usados no POST ----
    // config = opções do fetch (method, headers, body)
    const [config, setConfig] = useState(null);
    // method = "POST" (ou null). Quando muda, dispara o useEffect do POST
    const [method, setMethod] = useState(null);
    // callFetch = "sinal" após o POST terminar.
    // quando muda, o useEffect do GET roda de novo e atualiza a lista
    const [callFetch, setCallFetch] = useState(false);

    // Função que o App chama no submit:
    // httpConfig(product, "POST")
    // Ela NÃO faz o fetch ainda — só prepara config + method
    // O useEffect do POST é quem realmente envia a requisição
    const httpConfig = (data, method) => {
        if (method === "POST") {
            // monta o objeto de configuração do fetch
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // produto vira JSON string
            });

            // ao setar o method, o 2º useEffect detecta e faz o POST
            setMethod(method);
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
            const response = await fetch(url); // GET simples
            const json = await response.json();
            setData(json); // atualiza a lista → App re-renderiza com items novos
        };

        fetchData();
    }, [url, callFetch]); // callFetch é o elo: POST → muda callFetch → GET de novo

    // =========================
    // POST — cadastrar produto
    // =========================
    // Roda quando config ou method mudam (depois de httpConfig ser chamado no App)
    useEffect(() => {
        if (method === "POST") {
            const httpRequest = async () => {
                // fetchOptions = [url, config]
                // o spread (...) vira: fetch(url, config)
                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions);
                const json = await response.json(); // produto criado (com id gerado pelo json-server)

                // muda callFetch → força o GET acima a rodar de novo
                setCallFetch(json);
            };

            // precisa ser chamada DENTRO do if (mesmo escopo da função)
            httpRequest();
        }
    }, [config, method, url]);

    // O que o App recebe:
    // data → lista (renomeada para items no App)
    // httpConfig → função para disparar o POST
    return { data, httpConfig };
}
