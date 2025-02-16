import './ProductList.css';
import CardProducts from './CardProducts';
import { getProducts } from '../api';
import { useQuery } from 'react-query';


const ProductList = () => {
     
/**
 * Utiliza o react-query para buscar dados de produtos.
 * 
 * O react-query é uma biblioteca para gerenciamento de estado assíncrono em aplicações React,
 * facilitando a busca, cache e sincronização de dados remotos.
 * 
 * @param {string} 'products' - Chave da query para identificar a busca.
 * @param {function} getProduct - Função que realiza a busca dos dados dos produtos.
 * @param {object} options - Opções adicionais para a query.
 * @param {function} options.onerror - Função de callback para tratar erros durante a busca.
 * 
 * @returns {object} product - Dados dos produtos.
 * @returns {boolean} isLoading - Indicador de carregamento dos dados.
 */
   const { data: product, isLoading, isSuccess } = useQuery('products', getProducts, {onerror: error => console.log(error)});
  
   if (isLoading) {
    // Aqui pode ser colocado um componente de loading no estio skeleton para ficar mais amigável ao usuário
    return <p>Carregando produtos...</p>;
   }
   return (
    <div className="container-products">
        {isSuccess && product.length > 0 ? (
            product.map((item) => (
                <CardProducts
                key={item.id}
                imgCard={item.img}
                title={item.title}
                description={item.description}
                price={item.price} />
            ))
        ) : (
            <p>Carregando produtos...</p>
        )}

    </div>
  )
}

export default ProductList
