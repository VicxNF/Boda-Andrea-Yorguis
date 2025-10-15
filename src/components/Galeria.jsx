import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from './Galeria.module.css';

import foto1 from '/assets/galeria/foto1.jpg';
import foto2 from '/assets/galeria/foto2.jpg';
import foto3 from '/assets/galeria/foto3.jpg';
import foto4 from '/assets/galeria/foto4.jpg';
import foto5 from '/assets/galeria/foto5.jpg';

const imagenes = [foto1, foto2, foto3, foto4, foto5];

const slides = imagenes.map(src => ({ src }));

const Galeria = () => {
  const [isOpen, setIsOpen] = useState(false);   
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <> 
      <div className={styles.galeriaContainer}>
        <div className="container">
          <h2 className={styles.titulo}>Nuestros Momentos</h2>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className={styles.swiperContainer}
          >
            {imagenes.map((imagen, index) => (
              <SwiperSlide 
                key={index} 
                className={styles.swiperSlide}
                onClick={() => {
                  setImageIndex(index); 
                  setIsOpen(true);     
                }}
              >
                <img src={imagen} alt={`Recuerdo de la pareja ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={imageIndex}
      />
    </>
  );
};

export default Galeria;