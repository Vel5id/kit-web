import React from 'react';

const AboutMain = () => {
  return (
    <div style={{display:"flex", width:"100vw", height:"70vh", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", width:"96vw", height:"16vh", flexDirection:"row", backgroundColor:"#fff", margin:"2vh", fontSize:"14vh", fontWeight:"700", color:"#004677", marginLeft:"2vw"}}>О сообществе</div>
        <div style={{display:"flex", width:"96vw", height:"65vh", flexDirection:"row"}}>
            <div style={{display:"flex", width:"48vw", height:"48vh", flexDirection:"column", padding:"2vh", margin:"2vh", backgroundColor:"#004677", borderRadius:"1.75vw"}}>
                <h2 style={{fontSize:"8vh", fontWeight:"600", color:"rgb(240, 240, 240)", padding:"0px",margin:"0px", textAlign:"left", marginLeft:"14vw"}}>Миссия</h2>
                <p style={{fontSize:"4vh", fontWeight:"600", color:"rgb(240, 240, 240)", padding:"0px",margin:"0px", textAlign:"left", marginLeft:"1vw"}}>
                    <br/>
                    Мы Глобальное Бизнес-Сообщество. Создаем Международную Инфраструктуру
                    Всесторонней Трансформации Резидентов и развиваем культуру Предпринимательства.
                    <br/>
                </p>
            </div>
            <div style={{display:"flex", width:"48vw", height:"48vh", flexDirection:"column", padding:"2vh", margin:"2vh", backgroundColor:"#147BD1", borderRadius:"1.75vw"}}>
                <h2 style={{fontSize:"8vh", fontWeight:"600", color:"rgb(250, 250, 250)", padding:"0px",margin:"0px", textAlign:"left", marginLeft:"12vw"}}>Ценности</h2>
                <p style={{fontSize:"4vh", fontWeight:"600", color:"rgb(250, 250, 250)", padding:"0px",margin:"0px", textAlign:"left", marginLeft:"1vw"}}>
                        <br/>
                        СОВЕРШЕНСТВОВАНИЕ <span style={{ color: "rgb(200, 200, 200)",paddingRight:"2vh", fontWeight:"400" }}>каждого</span><br/>
                        
                        <br/>
                        СИНЕРГИЯ  <span style={{ color: "rgb(200, 200, 200)",paddingRight:"2vh", fontWeight:"400" }}>всех</span><br/>
                        <br/>
                        СОЗИДАНИЕ  <span style={{ color: "rgb(200, 200, 200)",paddingRight:"2vh", fontWeight:"400" }}>вклада в Общество</span><br/>
                        <br/>
                </p>
            </div>
        </div>
    </div>
);
};

export default AboutMain;
