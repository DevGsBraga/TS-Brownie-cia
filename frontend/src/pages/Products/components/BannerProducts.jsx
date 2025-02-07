import './BannerProducts.css';

// IMGS
import b1 from '../../../assets/img-products/b1.jpg'


import CardProduts from './CardProducts';

const BannerProducts = () => {
  return (
    <div className='container-expo-brownies'>

        <CardProduts title={"Brownie clássico"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />
        <CardProduts title={"Brownie chocolate"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />
        <CardProduts title={"Brownie chocolate"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />
        <CardProduts title={"Brownie chocolate"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />
        <CardProduts title={"Brownie chocolate"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />
        <CardProduts title={"Brownie chocolate"} description={"lorem"} imgCard={b1} price={"R$ 4,90"} />


    </div>
  )
}

export default BannerProducts
