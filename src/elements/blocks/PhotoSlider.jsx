import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Пример импортированных изображений
import slide1 from "../../images/1.jpg";
import slide2 from "../../images/2.jpg";
import slide3 from "../../images/3.jpg";
import slide4 from "../../images/4.jpg";
import slide5 from "../../images/5.webp";

const PhotoSlider = () => {
  // Состояние для отслеживания индекса левого (активного) слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Слайды
  const slidesData = [
    {
      id: 1,
      name: "Руслан Берденов",
      role: "Первый руководитель сети фармсторов Europharma Член наблюдательного совета в Aq Niet Group",
      image: slide1
    },
    {
      id: 2,
      name: "Мурат Утемисов",
      role: "Руководитель девелоперского направления в международной компании Kusto Group Член Совета Директоров Kusto Group",
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
    slidesToShow: 3,        // показываем 3 слайда за раз (пример)
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // при переключении сохраняем индекс "левой" карточки
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

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* 
        Опционально можете вынести блок с описанием активного слайда наверх/вниз 
        и анимировать, как в предыдущих примерах.
      */}
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <h2 style={{ margin: "0 0 8px" }}>{slidesData[activeIndex].name}</h2>
        <p style={{ margin: 0, color: "#555" }}>{slidesData[activeIndex].role}</p>
      </div>

      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          // Определяем, является ли данный слайд "активным" (то есть левым)
          const isActive = index === activeIndex;

          return (
            <div key={slide.id}>
              <div
                style={{
                  // Небольшие отступы между карточками
                  margin: "0 8px",
                  // Плавный переход при смене масштаба/фильтра
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  // Если слайд активный — масштаб 1, иначе 0.9
                  transform: isActive ? "scale(1.1)" : "scale(0.8)",
                  // Активный — цветной, остальные — grayscale
                  filter: isActive ? "none" : "grayscale(100%)",
                  // Можно добавить тень или рамку
                  boxShadow: isActive
                    ? "0 2px 8px rgba(0,0,0,0.15)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#fff"
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.name}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
                {/* 
                  Если хотите, чтобы name / role показывались внутри карточки,
                  оставьте этот блок. Иначе — уберите.
                */}

              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
