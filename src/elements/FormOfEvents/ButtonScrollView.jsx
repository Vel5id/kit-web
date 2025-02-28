import React from 'react';
import "./ButtonScrollView.css";

const ButtonScrollView = ({ handleButtonClick, activeSlide }) => {
  const buttons = [
    "Визит в компании",
    "Бизнес-Поездки",
    "Бизнес-Форум",
    "Спортивные мероприятия",
    "Бизнес-Завтрак",
    "Бизнес-Практикум",
    "Бизнес-Ужин",
    "Бизнес-Игры",
    "Бизнес Тренинги"
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5vh",
    width: "50vh",
    height: "62vh",
    backgroundColor: "rgb(240, 240, 240)",
    overflowY: "auto",
    padding: "3vh",
    boxSizing: "border-box",
    borderRadius: "2vh"
  };

  // Основной стиль кнопки
  const buttonStyle = {
    fontSize: "2.5vh",
    padding: "1vh",
    color:"#333",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#fff",
    transition: "background-color 0.3s"
  };

  // Стиль активной кнопки (имитирует эффект hover)
  const activeButtonStyle = {
    backgroundColor: "#147BD1", // например, светло-синий фон
    color:"white",
    borderRadius: "1vh"
  };

  return (
    <div style={containerStyle} className="hide-scrollbar-event">
      {buttons.map((btnText, index) => (
        <button
          key={index}
          className="EventButton"
          style={{ 
            ...buttonStyle, 
            ...(activeSlide === index ? activeButtonStyle : {}) 
          }}
          onClick={() => handleButtonClick(index)}
        >
          {btnText}
        </button>
      ))}
    </div>
  );
};

export default ButtonScrollView;
