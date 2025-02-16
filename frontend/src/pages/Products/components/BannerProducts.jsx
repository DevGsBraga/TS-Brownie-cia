import './BannerProducts.css';
import Slider from "react-slick";



// IMGS
import banner1 from '../../../assets/img-products-carrousel/bn1.jpg'
import banner2 from '../../../assets/img-products-carrousel/bn2.jpg'
import banner3 from '../../../assets/img-products-carrousel/bn3.jpg'


const BannerProducts = () => {

  // DEFINE AS CONFIG DO CARROUSEL
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (

    <div className="slider-container">
    <Slider {...settings}>

      <div className='container-img-slider'>
        <img src={banner1} alt="" />
      </div>

      <div className='container-img-slider'>
        <img src={banner2} alt="" />
      </div>

      <div className='container-img-slider'>
        <img src={banner3} alt="" />
      </div>

    </Slider>
  </div>

  )
}

export default BannerProducts
