import './Destaques-carrousel.css';

import {Swiper, SwiperSlide} from 'swiper/react'


import img1 from '../../../assets/img-carrousel/brownie1.jpg'
import img2 from '../../../assets/img-carrousel/brownie2.jpg'
import img3 from '../../../assets/img-carrousel/brownie3.jpg'



const DestaquesCarrousel = () => {





  return (
    <div className='carrousel'>
        <Swiper spaceBetween={1}
          slidesPerView={3}
          loop={true}
          centeredSlides={false}>
            <SwiperSlide>
                <img src={img1} alt="" className='img-carrousel' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img2} alt="" className='img-carrousel' />
            </SwiperSlide>

            <SwiperSlide>
                <img src={img3} alt="" className='img-carrousel' />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default DestaquesCarrousel
