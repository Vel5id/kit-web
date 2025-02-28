import React, { useRef } from 'react';
import HorizontalSlider from '../Additional_Blocks_And_Effects/SliderBlocks/HorizontalSlider';
import './ProductSection.css';

const slidesData = [
  { title: 'Manhattan Business Academy', desc: 'Эверест, Хан-Тенгри, Level-up' },
  { title: 'Бизнес - чекап', desc: 'Разбор бизнеса' },
  { title: 'Бизнес - встречи', desc: 'Тематические бизнес-завтраки/ужины в формате вопросов и ответов' },
  { title: 'Cross Resources', desc: 'Потребности, Возможности, Интересы' },
  { title: 'Networking Day', desc: 'Налаживание связей между Резидентами' },
  { title: 'Бизнес – поездки', desc: 'Поездки за границу (выставки, производство, межд. Компании) и внутри Казахстана (филиалы, производство)' },
  { title: 'KIT Invest Found', desc: 'Бизнес проекты, Инвестиции, Дивиденды' },
  { title: 'ПЛТ «Я-Созидатель»', desc: 'Программа Личной Трансформации' },
  { title: 'KIT Goverment', desc: 'Налаживание связей с Гос. Органами' },
];

const ProductSection = () => {
  const swiperRef = useRef(null);

  // Функция для анимированной прокрутки до нужной группы слайдов.
  // Например, каждая группа содержит 3 слайда: группа 0 – слайд 0, группа 1 – слайд 3, группа 2 – слайд 6.
  const handleButtonClick = (groupIndex) => {
    if (swiperRef.current) {
      const targetIndex = groupIndex * 3;
      // slideToLoop учитывает дублированные слайды в режиме loop.
      swiperRef.current.slideToLoop(targetIndex, 1000); // 1000 мс = 1 секунда анимации
    }
  };

  return (
    <div>
 <div className="DivMain" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "98%", height: "38vh", backgroundColor:"rgb(240, 240, 240)", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"20vh", marginBottom:"20vh", borderRadius:"4vh"}}>
        <div>
          <div style={{display:"flex", width:"200vh", height:"12vh", flexDirection:"row", padding:"1.5vh", }}>
            <div style={{display:"flex", width:"100vh", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"8vh", fontWeight:"600", color:"rgb(24, 96, 155)"}}>9 Продуктов</div>
            <div style={{display:"flex", width:"100vh", height:"100%", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", gap:"15px"}}>
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
        <div style={{display:"flex", width:"100%", height:"38vh", justifyContent:"center", alignItems:"center"}}>
          <HorizontalSlider
            swiperRef={swiperRef}  // Передаём ref в слайдер
            slides={slidesData}      // Передаём все слайды
            slidesPerView={3}
            spaceBetween={30}
            sliderWidth="200vh"
            sliderHeight="18vh"
            autoplayDelay={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
