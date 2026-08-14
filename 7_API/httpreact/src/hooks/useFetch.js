import {useState, useEffect} from "react";

export function useFetch(url) {
    const[data, setData] = useState(null);
    //const[loading, setLoading] = useState(false);
    //const[error, setError] = useState(null);    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, [url])


return { data };

}