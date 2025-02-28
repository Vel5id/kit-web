import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeedbackSlider.css';

const FeedbacksData = [
  {
    video: "https://www.youtube.com/watch?v=SXOf10vhGgU"
  },
  {
    video: "https://www.youtube.com/watch?v=8N9qD7abg84"
  },
  {
    video: "https://www.youtube.com/watch?v=wDqArJu1Rbs"
  },
  {
    video: "https://www.youtube.com/watch?v=qJtLZvhq-UQ"  
  }
];

const getYouTubeEmbedUrl = (url) => {
  const videoId = url.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const FeedbacksSlider = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div className="Feedbacks-slider-container" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "95%", height: "80vh", backgroundColor:"transapent", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"10vh", marginBottom:"20vh", borderRadius:"4vh"}}>
      <div className="Feedbacks-slider-heading" style={{color: "rgb(24, 96, 155)", fontSize: "12vh", fontWeight: "700"}}>
        Отзывы
      </div>
      <div className="Feedbacks-slider-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 300000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="Feedbacks-slider"
        >
          {FeedbacksData.map((item, index) => (
            <SwiperSlide key={index} className="Feedback-slide" style={{backgroundColor:"transparent", width: "35vw", height: "80vh", padding:"0px", borderTopLeftRadius:"3vh" ,borderTopRightRadius:"3vh" }}>
              <div className="Feedback-card">
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius:"3vh" }}>
                  <iframe 
                    src={getYouTubeEmbedUrl(item.video)}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" 
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius:"3vh"
                    }}
                  ></iframe>
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

export default FeedbacksSlider;
