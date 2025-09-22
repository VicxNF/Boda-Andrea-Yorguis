import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Galeria.module.css';

import foto1 from '../assets/galeria/foto1.jpg';
import foto2 from '../assets/galeria/foto2.jpg';
import foto3 from '../assets/galeria/foto3.jpg';
import foto4 from '../assets/galeria/foto4.jpg';
import foto5 from '../assets/galeria/foto5.jpg';

const imagenes = [foto1, foto2, foto3, foto4, foto5];

const Galeria = () => {
  return (
    <div className={styles.galeriaContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        loopedSlides={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
        onAfterInit={(swiper) => {
            swiper.update(); 
            swiper.slideToLoop(0, 0); // Mueve al slide inicial sin animación
          }}
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={imagen} alt={`Recuerdo ${index + 1}`} />
          </SwiperSlide>
        ))}
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Galeria;