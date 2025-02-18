import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './HorizontalSlider2.css'

const HorizontalSlider2 = ({
  swiperRef,
  slides = [],
  slidesPerView = 1, // один слайд теперь содержит группу элементов
  spaceBetween = 30,
  sliderWidth = "100%",
  sliderHeight = "20vh",
  autoplayDelay = 12000
}) => {
  // Группируем элементы slides в группы по 4 (2 ряда по 2 элемента)
  const chunkedSlides = [];
  for (let i = 0; i < slides.length; i += 6) {
    chunkedSlides.push(slides.slice(i, i + 6));
  }

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
        {chunkedSlides.map((group, groupIndex) => (
          <SwiperSlide
            key={groupIndex}
            style={{
              display: "flex",
              flexDirection: "column", // для организации двух рядов
              gap: "10px", // отступ между рядами
              justifyContent:"center",
              backgroundColor:"rgb(240, 240, 240)"
            }}
          >
            {/* Первый ряд (первые 2 элемента группы) */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px" // отступ между элементами в ряду
              }}
            >
              {group.slice(0, 3).map((slide, index) => (
                <div
                  key={index}
                  className="about-num2"
                  style={{
                    flex: 1,
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <div
                    className="about-num__title2"
                    style={{ color: "rgb(24, 96, 155)" }}
                  >
                    {slide.title}
                  </div>
                  <div
                    className="about-num__desc2"
                    style={{ color: "rgb(41, 41, 41)"}}
                  >
                    {slide.desc}
                  </div>
                </div>
              ))}
            </div>
            {/* Второй ряд (следующие 2 элемента группы) */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px" // отступ между элементами в ряду
              }}
            >
              {group.slice(3, 6).map((slide, index) => (
                <div
                  key={index}
                  className="about-num2"
                  style={{
                    flex: 1,
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <div
                    className="about-num__title2"
                    style={{ color: "rgb(24, 96, 155)"}}
                  >
                    {slide.title}
                  </div>
                  <div
                    className="about-num__desc2"
                    style={{ color: "rgb(41, 41, 41)"}}
                  >
                    {slide.desc}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider2;
