import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

const VerticalSlider = () => {
  const slides = [
    { title: '6', desc: 'Лет на рынке' },
    { title: '7', desc: 'Представительств за рубежом' },
    { title: '10', desc: 'Индустрий' },
    { title: '18', desc: 'Клубов' },
    { title: '9', desc: 'Продуктов' },
    { title: '150+', desc: 'Мероприятий в год' },
    { title: '400+', desc: 'Резидентов' },
    { title: '30%', desc: 'KIT Women' },
    { title: '30%', desc: 'KIT Mega' },
  ];

  return (
    <div className="About_vertical_container">
      <Swiper
        direction="vertical"
        slidesPerView={5}
        spaceBetween={10}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 3000, // 5000 миллисекунд = 5 секунд
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="about-num">
              <div className="about-num__title">{slide.title}</div>
              <div className="about-num__desc">{slide.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
