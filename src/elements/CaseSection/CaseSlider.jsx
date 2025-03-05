import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CaseSlider.css';
import case1 from "../../images/Case/case1.png"
import case2 from "../../images/Case/case2.webp"
import case3 from "../../images/Case/case3.png"
import case4 from "../../images/Case/case4.png"

const casesData = [
  {
    title: "ЖАНАТ АФТОЛИПОВ",
    sub_title: "Основатель 'STI COMPANY'",
    desc: "В Бизнес-сообществе KIT 6 лет. Увеличил доход в х10 в течении 5 лет",
    img: case1
  },
  {
    title: "ОРДАБАЕВ ЕРЛАН",
    sub_title: "ЕРЛАН ЕРКЕ",
    desc: "В Бизнес-сообщетве KIT 3 года. Увеличил доход в х5",
    img: case2
  },
  {
    title: "ЗАРИНА КОКЖАНОВА",
    sub_title: "Владелица сети студий аппаратной косметологии Bodypro",
    desc: "В Бизнес-сообществе KIT 3 года. Увеличила доход в х3",
    img: case3
  },
  {
    title: "ЕРИК ИЗБАСАРОВ",
    sub_title: "Владелец Aisha Bibi Hotel & SPA",
    desc: "Возможность доносить локальные вопросы своего Бизнеса, а также системный доступ к Гос. программам поддержки Предпринимателей",
    img: case4
  }
];

const casesSlider = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div className="cases-slider-container" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "95%", height: "80vh", backgroundColor:"transapent", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"10vh", marginBottom:"20vh", borderRadius:"4vh"}}>
      <div className="cases-slider-heading" style={{color: "rgb(24, 96, 155)", fontSize: "12vh", fontWeight: "700"}}>
        Кейсы
      </div>
      <div className="cases-slider-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 300000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="cases-slider"
        >
          {casesData.map((item, index) => (
            <SwiperSlide key={index} className="case-slide" style={{backgroundColor:"transparent", width: "35vw", height: "80vh", padding:"0px", borderTopLeftRadius:"3vh" ,borderTopRightRadius:"3vh" }}>
              <div className="case-card">
                <div>
                  <img src={item.img} alt={item.title} className="case-img" />
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"flex-start", textAlign: "left", width: "100%"}}>
                  <div style={{ marginBottom: "1vh", width:"85%", paddingTop:"1.5vh" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color:"rgb(24, 96, 155)" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "2vh", fontWeight: "600",color:"rgb(110, 143, 191)" }}>
                      {item.sub_title}
                    </div>
                  </div>
                  <div style={{ fontSize: "2.2vh", maxWidth: "600px", width:"85%", color:"rgb(51, 51, 51)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default casesSlider;
