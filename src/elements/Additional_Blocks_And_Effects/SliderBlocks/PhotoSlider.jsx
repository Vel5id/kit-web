import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TextAnimation.css"; // импортируем наши стили

// Пример импортированных изображений
import slide1 from "../../../images/Residents/1.jpg";
import slide2 from "../../../images/Residents/2.jpg";
import slide3 from "../../../images/Residents/3.jpg";
import slide4 from "../../../images/Residents/4.jpg";
import slide5 from "../../../images/Residents/5.webp";

const PhotoSlider = () => {
  // Состояние для текущего активного слайда
  const [activeIndex, setActiveIndex] = useState(0);
  // Состояние для предыдущего слайда (для анимации ухода текста)
  const [previousIndex, setPreviousIndex] = useState(null);

  // Слайды
  const slidesData = [
    {
      id: 1,
      name: "Руслан Берденов",
      role:
        "Первый руководитель сети фармсторов Europharma Член наблюдательного совета в Aq Niet Group",
      image: slide1
    },
    {
      id: 2,
      name: "Мурат Утемисов",
      role:
        "Руководитель девелоперского направления в международной компании Kusto Group Член Совета Директоров Kusto Group",
      image: slide2
    },
    {
      id: 3,
      name: "Ержан Тастамбеков",
      role: "Основатель и владелец сети кофеен Zebra Coffee",
      image: slide3
    },
    {
      id: 4,
      name: "Канат Копбаев",
      role: "Управляющий директор и член совета директоров Kusto Group",
      image: slide4
    },
    {
      id: 5,
      name: "Шалкарбек Талипов",
      role: "Учредитель Корпорации ORDA INVEST",
      image: slide5
    },
    {
      id: 6,
      name: "Имя Фамилия 6",
      role: "Описание должности и т.д.",
      image: slide2
    },
    {
      id: 7,
      name: "Имя Фамилия 7",
      role: "Описание должности и т.д.",
      image: slide3
    }
  ];

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // показываем 3 слайда за раз (пример)
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // При смене слайда сохраняем предыдущий индекс и обновляем активный
      setPreviousIndex(activeIndex);
      setActiveIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // После завершения анимации очищаем previousIndex,
  // чтобы оставался только текущий текст
  useEffect(() => {
    if (previousIndex !== null) {
      const timer = setTimeout(() => {
        setPreviousIndex(null);
      }, 600); // длительность анимации 0.6s
      return () => clearTimeout(timer);
    }
  }, [previousIndex]);

  return (
    <div style={{ maxWidth: "200vh", margin: "0 auto", padding: "5vh 2.5vh" }}>
      {/* Контейнер для текста с анимацией */}
      <div className="slide-text-container">
        {previousIndex !== null && (
          <div className="slide-text-out">
            <h2 style={{ margin: "0 0 1vh", color:"rgb(24, 96, 155)" }}>
              {slidesData[previousIndex].name}
            </h2>
            <p style={{ margin: 0, color: "#555" }}>
              {slidesData[previousIndex].role}
            </p>
          </div>
        )}
        <div className={previousIndex !== null ? "slide-text-in" : ""}>
          <h2 style={{ margin: "0 0 1vh", color:"rgb(24, 96, 155)" }}>{slidesData[activeIndex].name}</h2>
          <p style={{ margin: 0, color: "#555" }}>
            {slidesData[activeIndex].role}
          </p>
        </div>
      </div>

      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          // Определяем, является ли данный слайд активным (левым)
          const isActive = index === activeIndex;

          return (
            <div key={slide.id}>
              <div
                style={{
                  margin: "0 1vh",
                  transition: "transform 1s ease, filter 1s ease",
                  transform: isActive ? "scale(1)" : "scale(0.8)",
                  transformOrigin: "bottom center", // масштабирование от нижнего центра
                  filter: isActive ? "none" : "grayscale(100%)",
                  boxShadow: isActive
                    ? "0 0.25vh 0.5vh rgba(0,0,0,0.15)"
                    : "0 0.125vh 0.375vh rgba(0,0,0,0.1)",
                  borderRadius: "1vh",
                  overflow: "hidden",
                  background: "#fff"
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  style={{
                    width: "100%",
                    height: "75vh",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
