import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BenefitsSlider.css';

const benefitsData = [
  {
    num: "01",
    title: "ДЕЛОВЫЕ СВЯЗИ",
    desc: "Возможность находить новых Партнеров, Клиентов, а также потенциальных Инвесторов"
  },
  {
    num: "02",
    title: "ЭКОЛОГИЧНОЕ ОКРУЖЕНИЕ",
    desc: "Возможность приобретать новых друзей среди единомышленников и соратников"
  },
  {
    num: "03",
    title: "МАСШТАБИРОВАНИЕ БИЗНЕСА",
    desc: "Возможность выходить на новые рынки, в том числе международные, более динамичнее и увереннее за счет инфраструктуры KIT"
  },
  {
    num: "04",
    title: "ВЗАИМОДЕЙСТВИЕ С ГОСУДАРСТВОМ",
    desc: "Возможность доносить локальные вопросы своего Бизнеса, а также системный доступ к Гос. программам поддержки Предпринимателей"
  },
  {
    num: "05",
    title: "ОБМЕН ОПЫТОМ И ЗНАНИЯМИ",
    desc: "Возможность делиться и перенимать практические инструменты ведения Бизнеса у опытных, успешных Предпринимателей практиков"
  },
  {
    num: "06",
    title: "ПОЛЬЗА ДЛЯ ОБЩЕСТВА",
    desc: "Возможность личного вклада в развитие Общества совместно с единомышленниками в рамках деятельности и идеологии Сообщества"
  },
  {
    num: "07",
    title: "БЫТЬ В ТРЕНДЕ",
    desc: "Возможность отслеживать и быть в тренде Мировых инноваций и технологий в сфере Бизнеса"
  },
  {
    num: "08",
    title: "БИЗНЕС ОБУЧЕНИЕ",
    desc: "Возможность приобретать передовые знания от ТОП Предпринимателей, Спикеров и Преподавателей МВА"
  },
  {
    num: "09",
    title: "ТРАНСФОРМАЦИЯ ЛИЧНОСТИ",
    desc: "Возможность в команде встать на путь личностного роста, через определение своих врождённых Талантов и формирование системы своих ценностей, убеждений для достижения своих целей и реализации персональной Миссии"
  },
  {
    num: "10",
    title: "ВЫСШИЕ ЦЕННОСТИ",
    desc: "Возможность привносить в свою жизнь и нести положительный пример семейных ценностей, нравственности, экологичности, здорового образа жизни, взаимного уважении и поддержки"
  },
  {
    num: "11",
    title: "БИЗНЕС ПУТЕШЕСТВИЯ",
    desc: "Возможность регулярных коллективных выездов зарубеж по специально организованным программам в целях расширения кругозора, практической насмотренности и эмоциональной перезагрузки"
  }
];

const BenefitsSlider = () => {
  return (
    <div className="benefits-slider-container">
      <div className="benefits-slider-heading" style={{color: "rgb(24, 96, 155)"}}>
        ВМЕСТЕ С KIT ВЫ ПРИОБРЕТАЕТЕ
      </div>
      <div className="benefits-slider-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="benefits-slider"
        >
          {benefitsData.map((item, index) => (
            <SwiperSlide key={index} className="benefit-slide">
              <div className="benefit-card">
                <div className="benefit-card__heading">
                  <div className="benefit-card__title" style={{color:"rgb(24, 96, 155)"}}>{item.title}</div>
                  <div className="benefit-card__num">{item.num}</div>
                </div>
                <div className="benefit-card__desc">{item.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BenefitsSlider;
