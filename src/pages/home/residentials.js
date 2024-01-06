import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ReactComponent as Arrow } from 'assets/svgs/arrow.svg';

const Residentials = () => {
  const sliderRef = useRef();
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="residentials">
      <h2 className="title">Turar joy majmualari</h2>
      <div className="slide-container">
        <div className="navigations">
          <button className="prev" onClick={handlePrev}>
            <Arrow />
          </button>
          <button className="next" onClick={handleNext}>
            <Arrow />
          </button>
        </div>
        <Swiper ref={sliderRef} autoplay={{ delay: 2500 }} loop navigation={true} modules={[Autoplay, Pagination, Navigation]}>
          <SwiperSlide className="slide-item">
            <img src={require('../../assets/images/residents-slide.png')} alt="residents" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={require('../../assets/images/residents-slide.png')} alt="residents" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Residentials;
