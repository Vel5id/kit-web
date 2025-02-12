import React, { useState } from "react";

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
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ...(isHovered && {
      transform: "scale(0.97)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
    })
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
        style={{ marginLeft: "10px", textAlign: "left", fontWeight: 700, fontSize:"26px", color:"rgb(32, 66, 189)" }}
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
