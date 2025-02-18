import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const HorizontalSlider = ({
  swiperRef,
  slides = [],
  slidesPerView = 3,
  spaceBetween = 30,
  sliderWidth = "100%",
  sliderHeight = "20vh",
  autoplayDelay = 2000
}) => {
  return (
    <div className="About_horizontal_container" style={{ borderRadius: "15px" }}>
      <Swiper
        onSwiper={(swiper) => {
          if (swiperRef) {
            swiperRef.current = swiper;
          }
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{ width: sliderWidth, height: sliderHeight }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px"
            }}
          >
            <div
              className="about-num"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <div
                className="about-num__title"
                style={{ color: "rgb(24, 96, 155)", fontWeight: 600, fontSize:"4.5vh" }}
              >
                {slide.title}
              </div>
              <div
                className="about-num__desc"
                style={{ color: "rgb(41, 41, 41)", fontWeight: 600, fontSize:"2.5vh" }}
              >
                {slide.desc}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
