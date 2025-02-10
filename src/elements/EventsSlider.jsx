import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./EventsSlider.css";

// Пример данных событий
const eventsData = [
  {
    title: "Руслан Берденов",
    description:
      "Первый руководитель сети фармсторов Europharma. Член наблюдательного совета в Aq Niet Group",
    image:
      "https://via.placeholder.com/600x400?text=Event+1", // замените на реальный URL
  },
  {
    title: "Мурат Утемисов",
    description:
      "Руководитель девелоперского направления в международной компании Kusto Group. Член Совета Директоров Kusto Group",
    image:
      "https://via.placeholder.com/600x400?text=Event+2", // замените на реальный URL
  },
  {
    title: "Ержан Тастамбеков",
    description: "Основатель и владелец сети кофеен Zebra Coffee",
    image:
      "https://via.placeholder.com/600x400?text=Event+3", // замените на реальный URL
  },
  {
    title: "Канат Копбаев",
    description:
      "Управляющий директор и член совета директоров Kusto Group",
    image:
      "https://via.placeholder.com/600x400?text=Event+4", // замените на реальный URL
  },
  // можно добавить остальные события...
];

const EventsSlider = () => {
  return (
    <section className="section events-slider">
      <div className="container">
        <header className="events-slider__header" data-aos="fade-right">
          <h2 className="events-slider__title">
            <span>150+</span> МЕРОПРИЯТИЙ В ГОД
          </h2>
          <p className="events-slider__subtitle" data-aos="fade-right">
            Со спикерами из FORBES, мировых бизнес-школ, состоявшимися
            предпринимателями и признанными экспертами
          </p>
        </header>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          className="events-slider__swiper"
        >
          {eventsData.map((event, index) => (
            <SwiperSlide key={index} className="events-slider__slide">
              <div className="events-slider__slide-content">
                <div className="events-slider__text">
                  <h3 className="events-slider__slide-title">{event.title}</h3>
                  <p className="events-slider__slide-description">
                    {event.description}
                  </p>
                </div>
                <div className="events-slider__image-wrapper">
                  <img
                    className="events-slider__image lazy"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3C/svg%3E"
                    data-src={event.image}
                    alt={event.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSlider;
