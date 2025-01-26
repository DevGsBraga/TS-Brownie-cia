
import './Carrousel-Destaques.css'
import Slider from "react-slick";

function CarrouselDestaques() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: false,
        adaptiveHeight: true,
      };

  return (
    <div className="slider-container">
  <Slider {...settings}>

      <img src="../assets/img-carrousel/brownie1.jfif" alt="Slide 1" />
      <h3>Hello</h3>


    <img src="../assets/img-carrousel/brownie2.jfif" alt="Slide 1" />
      <h3>Hella</h3>


    <img src="../assets/img-carrousel/brownie3.jfif" alt="Slide 1" />
      <h3>Good Morning</h3>

  </Slider>
</div>

  );
}

export default CarrouselDestaques;
