import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './GallerySlider.css';
import gallery1 from "../../images/gallery1.jpg"
import gallery2 from "../../images/gallery2.jpg"
import gallery3 from "../../images/gallery3.jpg"
import gallery4 from "../../images/gallery4.jpg"

const gallerysData = [
  {
    title: "ЖАНАТ АФТОЛИПОВ",
    sub_title: "Основатель 'STI COMPANY'",
    desc: "В Бизнес-сообществе KIT 6 лет. Увеличил доход в х10 в течении 5 лет",
    img: gallery1
  },
  {
    title: "ОРДАБАЕВ ЕРЛАН",
    sub_title: "ЕРЛАН ЕРКЕ",
    desc: "В Бизнес-сообщетве KIT 3 года. Увеличил доход в х5",
    img: gallery2
  },
  {
    title: "ЗАРИНА КОКЖАНОВА",
    sub_title: "Владелица сети студий аппаратной косметологии Bodypro",
    desc: "В Бизнес-сообществе KIT 3 года. Увеличила доход в х3",
    img: gallery3
  },
  {
    title: "ЕРИК ИЗБАСАРОВ",
    sub_title: "Владелец Aisha Bibi Hotel & SPA",
    desc: "Возможность доносить локальные вопросы своего Бизнеса, а также системный доступ к Гос. программам поддержки Предпринимателей",
    img: gallery4
  }
];

const Gallery = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div className="gallerys-slider-container" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "98vw", height: "80vh", backgroundColor:"transapent", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"10vh", marginBottom:"20vh", borderRadius:"4vh"}}>
      <div className="gallerys-slider-heading" style={{color: "rgb(24, 96, 155)", fontSize: "12vh", fontWeight: "700"}}>
        Галерея
      </div>
      <div className="gallerys-slider-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 300000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="gallerys-slider"
        >
          {gallerysData.map((item, index) => (
            <SwiperSlide key={index} className="gallery-slide" style={{backgroundColor:"transparent", width: "49vw", height: "80vh", padding:"0px", borderRadius:"5vh"}}>
              <div className="gallery-card">
                <div>
                  <img src={item.img} alt={item.title} className="gallery-img" />
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

export default Gallery;
