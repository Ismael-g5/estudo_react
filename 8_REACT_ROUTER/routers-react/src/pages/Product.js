import {useParams, Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch.js';

const Product = () => {

    // rota dinamica - useParams() retorna um objeto com os parametros da rota
    const {id} = useParams();
    //console.log(id);
    const url = `http://localhost:3001/products/` + id;
    //carregamento de dados do produto -> individual
    const {data: product, loading, error} = useFetch(url);


    console.log(product);
    return (
        <div>
            <p>Product ID: {id}</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {product && <p>Nome do Produto: {product.name}</p>}
            {product && <p>Preço do Produto: {product.price}</p>}

            {/* Nested Routes */}

            <Link to={`/products/${id}/details`}>Mais Informações</Link>


        </div>

    )
}

export default Product;