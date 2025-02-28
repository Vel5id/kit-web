import React, { useState } from "react";
import './AboutAdvantsItem.css'

// Компонент, принимающий пропсы: num и desc
export function AboutAdvantsItem({ num, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    width: "98%",
    height: "10.5vh",
    flexGrow: 0, // не позволяем элементу расти сверх заданной высоты
    backgroundColor: "#fff",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", // выравнивание элементов слева
    alignItems: "center",
    marginBottom: "0px",
  };

  return (
    <div
      className="about-advants__item"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Блок с цифрой – всегда слева */}
      <div
        className="about-advants__num"
        style={{ marginLeft: "10px", textAlign: "left", fontWeight: 700, fontSize:"26px", color:"rgb(24, 96, 155)" }}
      >
        {num}
      </div>
      
      {/* Блок с описанием – занимает оставшееся пространство и центрирует текст */}
      <div
        className="about-advants__desc"
        style={{ flexGrow: 1, textAlign: "left", paddingLeft:"10px", fontWeight: 600, color: "rgb(41, 41, 41)"}}
      >
        {desc}
      </div>
    </div>
  );
}
