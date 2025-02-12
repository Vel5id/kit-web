import React from 'react';
import './Section.css'; // Импортируйте свои стили, если необходимо
import VerticalSlider from './blocks/VerticalSlider';
import { AboutAdvantsItem } from './blocks/AboutAdvantsItem';

const About_section = () => {
    return (
      <>
        <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "100%",height: "102vh", marginTop: "20px"}}>
            <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "100%",height: "20vh"}}>
            <div className="text-info-high" style={{fontSize:"30px", fontWeight: 600, fontSize:"80px", paddingBottom:"20px", marginLeft:"20px" ,color:"rgb(24, 96, 155)"}}>О СООБЩЕСТВЕ</div>
            </div>
            <div className="DivMain" style={{display: "flex", flexDirection: "row",color: "darkblue",width: "100%",height: "92vh"}}>
                <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "25%",height: "92vh", paddingLeft: "10px", paddingTop: "10px"}}>
                <VerticalSlider/>
                </div>

                <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "75%",height: "95vh", paddingLeft: "20px", paddingTop: "10px"}}>
                    <div className="DivMain" style={{display: "flex", flexDirection: "column", backgroundColor: "#147BD1",color: "white",width: "100%",height: "15vh", justifyContent:"center", borderRadius: "15px", marginBottom:"20px"}}>
                        <div className="additional-text-high" style={{fontSize:"16px", textWrap: 'wrap', paddingLeft:"30px"}}>Мы глобальное бизнес-сообщество, создаем международную инфраструктуру, всесторонней трансформации Резидентов и развиваем культуру предпринимательства</div>
                        </div> 
                    <div className="DivMain" style={{display: "flex", flexDirection: "column", backgroundColor:"rgb(240, 240, 240)",color: "darkblue",width: "100%",height: "62vh", borderRadius:"15px"}}>
                        <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "#147BD1",width: "100%",height: "10vh", paddingLeft: "30px",justifyContent:"center"}}>
                            <div className="text-info-high" style={{fontSize:"30px", fontWeight: 600}}>Что есть в сообществе KIT</div>
                            </div>
                        <div className="DivMain" style={{display: "flex", flexDirection: "row",color: "darkblue",width: "100%",height: "50vh", flexWrap:"wrap"}}>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px", paddingLeft:"30px" }}>
                            <AboutAdvantsItem num="01" desc="Развитие личного бренда" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px"}}>
                            <AboutAdvantsItem num="02" desc="Клубы по интересам " />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px", paddingLeft:"30px" }}>
                            <AboutAdvantsItem num="03" desc="Нетворкинг" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px"}}>
                            <AboutAdvantsItem num="04" desc="Семейные ценности" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px", paddingLeft:"30px" }}>
                            <AboutAdvantsItem num="05" desc="Уникальное мобильное приложение" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px"}}>
                            <AboutAdvantsItem num="06" desc="Бизнес-ужины с ТОПовыми предпринимателями" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px", paddingLeft:"30px" }}>
                            <AboutAdvantsItem num="07" desc="KIT МВА" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "10px"}}>
                            <AboutAdvantsItem num="08" desc="Бизнес-разборы" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
  
export default About_section;