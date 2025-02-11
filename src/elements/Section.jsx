import React from 'react';
import './Section.css'; // Импортируйте свои стили, если необходимо
import VerticalSlider from './VerticalSlider';

const Section = () => {
    return (
      <>
        {/* Секция Home – основной слайдер/главный блок */}
        <section className="test_section">
            <div className="title about__title" data-aos="fade-right">
                О сообществе
            </div>
          <div className='About_full_container_horizontal'>
            <div className='About_vertical_container'> 
            {/*Контейнер с вертикальным слайдером, снизу вверх */}
            <VerticalSlider/>
            </div>
            <div className='About_vertical_container'>
              <p>Мы глобальное бизнес-сообщество, создаем международную инфраструктуру, всесторонней трансформации Резидентов и развиваем культуру предпринимательства</p>

              <div className='About_vertical_container_additional'><p>Что есть в сообществе KIT </p>
              </div>
              <div className='About_vertical_container_additional'>
              {/* 2 столбика содержащие данные о продуктах компании (1)*/}
              <div className='About_vertical_container_additional_column'>
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    01
                  </div>
                  <div className="about-advants__desc">
                    Развитие личного бренда
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    03
                  </div>
                  <div className="about-advants__desc">
                    Нетворкинг
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    05
                  </div>
                  <div className="about-advants__desc">
                    Уникальное мобильное приложение
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    07
                  </div>
                  <div className="about-advants__desc">
                    KIT MBA
                  </div>
                </div>
              
              </div>
              {/* 2 столбика содержащие данные о продуктах компании (2)*/}
              <div className='About_vertical_container_additional_column'>
              <div className="about-advants__item">
                  <div className="about-advants__num">
                    02
                  </div>
                  <div className="about-advants__desc">
                    Клубы по интересам
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    04
                  </div>
                  <div className="about-advants__desc">
                    Семейные ценности
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    06
                  </div>
                  <div className="about-advants__desc">
                    Бизнес-ужины с Топовыми предпринимателями
                  </div>
                </div>
                {/* */}
                <div className="about-advants__item">
                  <div className="about-advants__num">
                    08
                  </div>
                  <div className="about-advants__desc">
                    Бизнес Разборы
                  </div>
                </div>
              
              </div>

              </div>
            </div>
          </div>
        </section>
        {/* Секция About – информация о сообществе и слайдер числовых показателей */}
        <section className="section about bg-cube-top bg-cube-bottom">
          <div className="container">
            <div className="title about__title" data-aos="fade-right">
              О сообществе
            </div>
            <div className="about__box">
              <div className="about__left" data-aos="fade-up">
                <div className="swiper-about-left">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">6</div>
                        <div className="about-num__desc">лет на рынке</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">7</div>
                        <div className="about-num__desc">
                          представительств за рубежом
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">6</div>
                        <div className="about-num__desc">
                          филиалов по Казахстану
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">10</div>
                        <div className="about-num__desc">индустрий</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">18</div>
                        <div className="about-num__desc">клубов</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">9</div>
                        <div className="about-num__desc">продуктов</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">150+</div>
                        <div className="about-num__desc">
                          мероприятий в год
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">400+</div>
                        <div className="about-num__desc">резидентов</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">30%</div>
                        <div className="about-num__desc">KIT WOMEN</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="about-num">
                        <div className="about-num__title">30%</div>
                        <div className="about-num__desc">KIT MEGA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__right">
                <div className="about__desc-wrapper" data-aos="fade-down">
                  <div className="text-16">
                    Мы глобальное бизнес-сообщество, создаем международную инфраструктуру, всесторонней трансформации Резидентов и развиваем культуру предпринимательства
                    <br />
                  </div>
                </div>
                <div className="about-advants" data-aos="fade-up">
                  <div className="about-advants__title">
                    Что есть в сообществе KIT
                  </div>
                  <div className="about-advants__box">

                    <div className="about-advants__item">
                      <div className="about-advants__num">02</div>
                      <div className="about-advants__desc">
                        Клубы по интересам
                      </div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">03</div>
                      <div className="about-advants__desc">Нетворкинг</div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">04</div>
                      <div className="about-advants__desc">
                        Семейные ценности
                      </div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">05</div>
                      <div className="about-advants__desc">
                        Уникальное мобильное приложение
                      </div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">06</div>
                      <div className="about-advants__desc">
                        Бизнес-ужины с ТОПовыми предпринимателями
                      </div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">07</div>
                      <div className="about-advants__desc">KIT МВА</div>
                    </div>
                    <div className="about-advants__item">
                      <div className="about-advants__num">08</div>
                      <div className="about-advants__desc">Бизнес-разборы</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Section;