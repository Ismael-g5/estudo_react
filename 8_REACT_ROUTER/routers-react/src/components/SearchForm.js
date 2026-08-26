import {useParams, Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';


const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();


    //const url = `http://localhost:3001/products/`;
   //const {data: products, loading, error} = useFetch(url);

   const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search?q=' + query);
   }

   return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
   );
}

export default SearchForm;