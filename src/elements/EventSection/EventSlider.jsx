import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ev1 from '../../images/ev1.jpg';
import ev2 from '../../images/ev2.jpg';
import ev3 from '../../images/ev3.jpg';
import ev4 from '../../images/ev4.jpg';
import ev5 from '../../images/ev5.jpg';
import ev6 from '../../images/ev6.jpg';
import ev7 from '../../images/ev7.jpg';
import ev8 from '../../images/ev8.jpg';
import ev9 from '../../images/ev9.jpg';

const EventSlider = ({ setSwiperRef, onSlideChange }) => {
  const events = [
    {
      id: 1,
      title: "Визит в компании",
      description:
        "С нашим сообществом для вас будут открыты двери многих уникальных мест, куда может попасть далеко не каждый. Вы сможете познакомиться с компаниями резидентов, разобраться в бизнес процессах и перенять полезный опыт для собственного дела.",
      image: ev1
    },
    {
      id: 2,
      title: "Бизнес-Поездки",
      description:
        "Для вас откроются возможности для посещения крупнейших мероприятий, выставок и деловых встреч. Вы сможете найти международных партнеров, которые будут полезны для вашего бизнеса.",
      image: ev2
    },
    {
      id: 3,
      title: "Бизнес-Форум",
      description:
        "Участие в бизнес-форуме позволит обменяться опытом с ведущими специалистами и наладить новые контакты, которые помогут развивать ваш бизнес.",
      image: ev3
    },
    {
      id: 4,
      title: "Спортивные мероприятия",
      description:
        "Активное времяпрепровождение и спортивные соревнования помогут не только поддерживать форму, но и устанавливать неформальные связи с коллегами по бизнесу.",
      image: ev4
    },
    {
      id: 5,
      title: "Бизнес-Завтрак",
      description:
        "Утренние встречи за бизнес-завтраком – отличная возможность начать день с вдохновения, обменяться идеями и установить новые контакты.",
      image: ev5
    },
    {
      id: 6,
      title: "Бизнес-Практикум",
      description:
        "Практические занятия, мастер-классы и семинары помогут освоить новые инструменты и методы ведения бизнеса на практике.",
      image: ev6
    },
    {
      id: 7,
      title: "Бизнес-Ужин",
      description:
        "Неформальная обстановка за бизнес-ужином способствует установлению крепких партнерских связей и обмену опытом в уютной обстановке.",
      image: ev7
    },
    {
      id: 8,
      title: "Бизнес-Игры",
      description:
        "Развлекательные бизнес-игры способствуют развитию креативного мышления, командного взаимодействия и стимулируют деловую активность.",
      image: ev8
    },
    {
      id: 9,
      title: "Бизнес Тренинги",
      description:
        "Эффективные тренинги помогут переосмыслить стратегии и разработать новые подходы к решению сложных задач, необходимых для роста вашего бизнеса.",
      image: ev9
    }
  ];

  const slideStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight:"5vw",
    width: '72vw',
    height: '62vh',
    boxSizing: 'border-box',
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: "2vh",

  };

  const imageStyle = {
    width: '42vw',
    height: '62vh',
    objectFit: 'cover',
    borderTopLeftRadius: "2vh",
    borderBottomLeftRadius: "2vh"
  };

  const eventTextStyle = {
    marginLeft: "5vh",
    marginTop: "5vh",
    width: '22.5vw',
    height: '62vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  };

  const titleStyle = {
    width: "90%",
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: "#333",
    textAlign: 'left'
  };

  const descriptionStyle = {
    width: "80%",
    fontSize: '2.75vh',
    textAlign: 'left',
    color: "#333"
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSwiper={setSwiperRef}
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
    >
      {events.map(event => (
        <SwiperSlide key={event.id} style={{ padding: "0vh", margin:"0px",width:"74vw" }}>
          <div style={slideStyle} >
            <img src={event.image} alt={event.title} style={imageStyle} />
            <div style={eventTextStyle}>
              <div style={titleStyle}>{event.title}</div>
              <div style={descriptionStyle}>{event.description}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSlider;
