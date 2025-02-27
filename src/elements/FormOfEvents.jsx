import React, { useRef, useState } from "react";
import EventSlider from "./EventSlider";
import "./FormOfEvents.css";
import ButtonScrollView from "./ButtonScrollView";

const FormOfEvents = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // При клике на кнопку переключаем слайд и обновляем активный индекс
  const handleButtonClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveSlide(index);
    }
  };

  // Обновление активного индекса при смене слайда
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return ( 
    <div
      className="DivMain"
      style={{
        display: "flex",
        flexDirection: "column",
        color: "darkblue",
        width: "200vh",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "1%",
        marginTop: "20vh",
        marginBottom: "20vh",
        borderRadius: "4vh"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "200vh",
          height: "62vh",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "12vh",
          fontWeight: "700",
          color: "rgb(24, 96, 155)"
        }}
      >
        ФОРМАТЫ МЕРОПРИЯТИЙ
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "darkblue",
          width: "200vh",
          height: "62vh",
          alignItems: "flex-start",
          justifyContent: "flex-start"
        }}
      >
        <div style={{ display: "flex", width: "50vh", height: "62vh", flexDirection: "column", gap: "1vh" }}>
          {/* Передаём handleButtonClick и activeSlide в ButtonScrollView */}
          <ButtonScrollView handleButtonClick={handleButtonClick} activeSlide={activeSlide} />
        </div>
        <div style={{ width: "150vh", height: "62vh" }}>
          {/* Передаём setSwiperRef и onSlideChange для управления слайдером */}
          <EventSlider 
            setSwiperRef={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormOfEvents;
