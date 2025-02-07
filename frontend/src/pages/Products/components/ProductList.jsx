import './ProductList.css';
import { useEffect, useState } from "react"
import axios from "axios"
import CardProducts from './CardProducts';


const ProductList = () => {
    // DEFINO UMA CONST PARA RECEBER OS DADOS E ATUALIZAR CONFORME AS REQUISIÇÕES
    const [product, setProduct] = useState([]);

    // ADICIONA O EFEITO PARA BUSCAR AS REQUISIÇÕES
    useEffect(() => {
        // CONST PARA PEGAR E ARMAZENAR TEMPORARIAMENTE A RESPONSE
        const getProducts = async () => {
            try {
                // CONST PARA RECEBER DE FATO A RESPONSE
                const response = await axios.get('http://localhost:3000/api/products');


                // ATUALIZA O ESTADO COM OS DADOS RECEBIDOS
                setProduct(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        getProducts();
    }, [])


  return (
    <div className="container-products">
        {product.length > 0 ? (
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
