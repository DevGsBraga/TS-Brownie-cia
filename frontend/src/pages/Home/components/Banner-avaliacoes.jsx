import './Banner-avaliacoes.css';
import "swiper/css"; // IMPORTA O CSS DINÂMICO DA LIBRARY

import {Swiper, SwiperSlide } from 'swiper/react'



const BannerAvaliacoes = () => {
  return (
    <section className="avaliacoes-container-principal">
    <div className="avaliacoes-carrousel">
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        centeredSlides={false}
      >
        <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur et eligendi atque velit tempora ea, recusandae dolores quas consequuntur dolor fugit similique dignissimos fugiat quasi quae eos incidunt tempore?

            <p>Anna Rodrigues</p>
        </SwiperSlide>
        <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia repudiandae vel, nulla laborum voluptas voluptate, explicabo quae est odio similique provident fuga doloribus officia tempora facere numquam ut autem?
        </SwiperSlide>
        <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia repudiandae vel, nulla laborum voluptas voluptate, explicabo quae est odio similique provident fuga doloribus officia tempora facere numquam ut autem?
        </SwiperSlide>
        <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia repudiandae vel, nulla laborum voluptas voluptate, explicabo quae est odio similique provident fuga doloribus officia tempora facere numquam ut autem?
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  )
}

export default BannerAvaliacoes
