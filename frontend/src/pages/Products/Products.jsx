import './Products.css';

// COMPONENTS
import NavBar from '../../components/NavBar'
// import BannerProducts from './components/BannerProducts';
import ProductList from './components/ProductList';




const Products = () => {
  return (
    <div className='products-container-principal'>
    <NavBar />
    {/* <BannerProducts /> */}
    <ProductList />




    </div>
)

}

export default Products
