import { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as Exit } from 'assets/svgs/exit-screen.svg';
import './style.css';

const Single = () => {
  const { id } = useParams();
  const swiperRef = useRef(null);
  const thumbsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const slideToIndex = useCallback((index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    if (thumbsRef.current && thumbsRef.current.swiper) {
      thumbsRef.current.swiper.slideTo(index);
    }
  }, []);
  id;

  const handleChange = ({ activeIndex }) => {
    slideToIndex(activeIndex);
    setActiveIndex(activeIndex);
  };
  const sliderData = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="container announcements">
      <h2 className="title">Namangan, Davlatobod, 5-kichik noxiya 1-uy</h2>
      <div className="row">
        <div className="space">
          <div className={`slider ${open ? 'open' : ''}`}>
            <button onClick={() => setOpen(false)} className="closer">
              <Exit />
            </button>
            <Swiper ref={swiperRef} onSlideChange={handleChange} onClick={() => setOpen(!open)} className="top-slider" spaceBetween={35}>
              {sliderData.map((slide) => (
                <SwiperSlide key={slide}>
                  <img src={`https://picsum.photos/1053/${500 + slide}`} alt="img-slide" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper ref={thumbsRef} onSlideChange={handleChange} className="thumbs-container" slidesPerView={'auto'} spaceBetween={35}>
              {sliderData.map((image) => (
                <SwiperSlide key={image} onClick={() => handleChange({ activeIndex: image })}>
                  <img
                    className={activeIndex === image ? 'active' : undefined}
                    src={`https://picsum.photos/1053/${500 + image}`}
                    alt="img-thumb"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="progressbar">
              <div className="filled" style={{ '--percent': `${(activeIndex + 1) * 10}%` }}></div>
              <p className="absolute-center">{activeIndex + 1}/10</p>
            </div>
          </div>
        </div>
        <div className="between"></div>
      </div>
    </div>
  );
};

export default Single;
