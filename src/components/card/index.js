import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ReactComponent as Eye } from 'assets/svgs/eye.svg';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Card = ({ item }) => {
  return (
    <Link to={'#'} className="card">
      <header className="card-top">
        <div className="badge">
          <p>TOP</p>
        </div>
        <Swiper
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          loop
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[1, 2, 3].map((slide) => (
            <SwiperSlide key={slide}>
              <img src={'https://picsum.photos/300/' + (200 + slide + item)} alt="slide-item" />
            </SwiperSlide>
          ))}
          <div className="bottom-infos">
            <div className="views">
              <Eye />
              <p>12</p>
            </div>
          </div>
        </Swiper>
      </header>
      <div className="card-body">
        <p className="pice">40.000.000 uzs</p>
        <div className="row-info">
          <p>3 xona</p>
          <p>3-qavat</p>
          <p>120 m²</p>
        </div>
        <p className="address">Namangan viloyat, Chust shaxri, mustaqillik mahalla 123 uy.</p>
      </div>
    </Link>
  );
};
