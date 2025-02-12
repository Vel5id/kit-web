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
    <div className="About_vertical_container" >
      <Swiper
        direction="vertical"
        slidesPerView={5}
        spaceBetween={10}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2000, // 5000 миллисекунд = 5 секунд
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
        style={{width:"50vh", height:"102vh"}}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius:"15px" }}>
            <div className="about-num" style={{display:"flex", flexDirection:"column", height:"100%", justifyContent:"center" }} >
              <div className="about-num__title" style={{ color:"#147BD1", fontWeight: 400}}>{slide.title}</div>
              <div className="about-num__desc" style={{ color: "rgb(41, 41, 41)", fontWeight: 600}}>{slide.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
