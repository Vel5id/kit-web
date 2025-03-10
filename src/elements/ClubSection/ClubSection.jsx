import React, { useRef } from 'react';
import HorizontalSlider2 from '../Additional_Blocks_And_Effects/SliderBlocks/HorizontalSlider2';
import './ClubSection.css';

const slidesData = [
    {
      title: 'KIT MBA Alumni',
      desc: 'Клуб выпускников KIT MBA',
    },
    {
      title: 'KIT MEGA',
      desc: 'Клуб Резидентов с годовым оборотом 1 млрд. и выше',
    },
    {
      title: 'KIT Ментор',
      desc: 'Клуб старших наставников для молодых предпринимателей',
    },
    {
      title: 'KIT Jas-star',
      desc: 'Клуб молодых предпринимателей',
    },
    {
      title: 'KIT Reading',
      desc: 'Клуб для ценителей литературы, где можно погрузиться в мир книг и обменяться вдохновляющими мыслями',
    },
    {
      title: 'KIT Лидеры индустрий',
      desc: 'Клуб для Лидеров индустрий',
    },
    {
      title: 'KIT Adet',
      desc: 'Клуб полезных привычек',
    },
    {
      title: 'KIT Sport',
      desc: 'Клуб для совместных тренировок, поддержки и движения к здоровью и силе',
    },
    {
      title: 'KIT Aru',
      desc: 'Клуб Бизнес Леди для казахскоговорящей аудитории',
    },
    {
      title: 'KIT Women',
      desc: 'Клуб Бизнес Леди для русскоговорящей аудитории',
    },
    {
      title: 'KIT Travel',
      desc: 'Клуб любителей путешествий',
    },
    {
      title: 'KIT Creative',
      desc: 'Клуб любителей творчества и искусства',
    },
    {
      title: 'KIT Меценаты',
      desc: 'Клуб Спонсоров в сфере образования',
    },
    {
      title: 'KIT Invest',
      desc: 'Клуб инвесторов и инноваций',
    },
    {
      title: 'KIT Global',
      desc: 'Клуб Резидентов международного уровня',
    },
    {
      title: 'KIT Trueman',
      desc: 'Клуб Настоящих мужчин',
    },
    {
      title: 'KIT ASR',
      desc: 'Совет Созидателей',
    },
    {
      title: 'KIT Media',
      desc: 'Клуб медийных личностей',
    },
  ];


const ClubSection = () => {
  const swiperRef = useRef(null);

  // Функция для анимированной прокрутки до нужной группы слайдов.
  // Например, каждая группа содержит 3 слайда: группа 0 – слайд 0, группа 1 – слайд 3, группа 2 – слайд 6.
  const handleButtonClick = (groupIndex) => {
    if (swiperRef.current) {
      const targetIndex = groupIndex * 1;
      // slideToLoop учитывает дублированные слайды в режиме loop.
      swiperRef.current.slideToLoop(targetIndex, 1000); // 1000 мс = 1 секунда анимации
    }
  };

  return (
    <div style={{display:"flex",width:"100vw",height:"120vh",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                  <div className="text-info-high" style={{fontWeight: 700, fontSize:"12vh", marginLeft:"3vw" ,color:"rgb(24, 96, 155)", alignSelf:"start"}}>Клубы</div>
 <div className="DivMain" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "95vw", height: "48vh", backgroundColor:"rgb(240, 240, 240)", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"5vh", marginBottom:"20vh", borderRadius:"4vh", padding:"1vh 1vw"}}>
        <div>
          <div style={{display:"flex", width:"92vw", height:"12vh", flexDirection:"row", padding:"1.5vh", }}>
            <div style={{display:"flex", width:"92vw", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"8vh", fontWeight:"600", color:"rgb(24, 96, 155)"}}>18 Клубов</div>
            <div style={{display:"flex", width:"92vw", height:"100%", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", gap:"15px"}}>
              <div style={{fontSize:"2.5vh"}} >Направления:  </div>
              <button className="button" style={{fontSize:"2.5vh"}} onClick={() => handleButtonClick(0)}>
                K (Knowledge)
              </button>
              <button className="button" style={{fontSize:"2.5vh"}} onClick={() => handleButtonClick(1)}>
                I (Interaction)
              </button>
              <button className="button" style={{fontSize:"2.5vh"}} onClick={() => handleButtonClick(2)}>
                T (Trends)
              </button>
            </div>
          </div>
        </div>
        <div style={{display:"flex", width:"92vw", height: "32vh", justifyContent:"center", alignItems:"center",backgroundColor:"transparent" }}>
          <HorizontalSlider2
            swiperRef={swiperRef}  // Передаём ref в слайдер
            slides={slidesData}      // Передаём все слайды
            slidesPerView={1}
            spaceBetween={30}
            sliderWidth="92vw"
            sliderHeight="32vh"
            autoplayDelay={200000}
          />
        </div>
      </div>
    </div>
  );
};

export default ClubSection;
