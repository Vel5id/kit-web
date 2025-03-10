import React from 'react';
import './Section.css'; // Импортируйте свои стили, если необходимо
import VerticalSlider from '../Additional_Blocks_And_Effects/SliderBlocks/VerticalSlider';
import { AboutAdvantsItem } from '../Additional_Blocks_And_Effects/AboutAdvantsItem';

const AboutSection = () => {
    return (
      <div style={{display:"flex",width:"100vw",height:"120vh",justifyContent:"center", alignItems:"center"}}>
        <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "98vw",height: "102vh", marginTop: "3vh", marginBottom:"20vh"}}>
            <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "100%",height: "20vh"}}>
            <div className="text-info-high" style={{ fontWeight: 600, fontSize:"12vh", paddingBottom:"3vh", marginLeft:"3vh" ,color:"rgb(24, 96, 155)"}}>О СООБЩЕСТВЕ</div>
            </div>
            <div className="DivMain" style={{display: "flex", flexDirection: "row",color: "darkblue",width: "100%",height: "92vh"}}>
                <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "25%",height: "92vh", paddingLeft: "1.5vh", paddingTop: "1.5vh"}}>
                <VerticalSlider/>
                </div>

                <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "darkblue",width: "75%",height: "95vh", paddingLeft: "3vh", paddingTop: "1.5vh"}}>
                    <div className="DivMain" style={{display: "flex", flexDirection: "column", backgroundColor: "#147BD1",color: "white",width: "100%",height: "15vh", justifyContent:"center", borderRadius: "15px", marginBottom:"3vh"}}>
                        <div className="additional-text-high" style={{fontSize:"16px", textWrap: 'wrap', paddingLeft:"4.5vh"}}>Мы глобальное бизнес-сообщество, создаем международную инфраструктуру, всесторонней трансформации Резидентов и развиваем культуру предпринимательства</div>
                        </div> 
                    <div className="DivMain" style={{display: "flex", flexDirection: "column", backgroundColor:"rgb(240, 240, 240)",color: "darkblue",width: "100%",height: "62vh", borderRadius:"15px"}}>
                        <div className="DivMain" style={{display: "flex", flexDirection: "column",color: "#147BD1",width: "100%",height: "10vh", paddingLeft: "4.5vh",justifyContent:"center"}}>
                            <div className="text-info-high" style={{fontSize:"4.5vh", fontWeight: 600}}>Что есть в сообществе KIT</div>
                            </div>
                        <div className="DivMain" style={{display: "flex", flexDirection: "row",color: "darkblue",width: "100%",height: "50vh", flexWrap:"wrap"}}>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh", paddingLeft:"4.5vh" }}>
                            <AboutAdvantsItem num="01" desc="Развитие личного бренда" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh"}}>
                            <AboutAdvantsItem num="02" desc="Клубы по интересам " />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh", paddingLeft:"4.5vh" }}>
                            <AboutAdvantsItem num="03" desc="Нетворкинг" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh"}}>
                            <AboutAdvantsItem num="04" desc="Семейные ценности" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh", paddingLeft:"4.5vh" }}>
                            <AboutAdvantsItem num="05" desc="Уникальное мобильное приложение" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh"}}>
                            <AboutAdvantsItem num="06" desc="Бизнес-ужины с ТОПовыми предпринимателями" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh", paddingLeft:"4.5vh" }}>
                            <AboutAdvantsItem num="07" desc="KIT МВА" />
                        </div>
                        <div style={{ width: "50%", boxSizing: "border-box", paddingRight: "1.5vh"}}>
                            <AboutAdvantsItem num="08" desc="Бизнес-разборы" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
export default AboutSection;