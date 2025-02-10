import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <>
      {/* Секция регистрации – форма для присоединения */}
      <section className="section signup-section bg-cube-top">
        <div className="container">
          <div className="signup__container" data-aos="zoom-in-up">
            <div className="signup__image">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201872%201650'%3E%3C/svg%3E"
                data-src="https://bakit.kz/wp-content/uploads/2024/10/kit-form.webp"
                className="signup__img lazy"
                alt="Регистрация – визуальное сопровождение"
              />
            </div>
            <div className="signup__content">
              <div className="signup__headline">
                Не упустите шанс расширить свои возможности!
              </div>
              <div className="signup__subheadline">
                Присоединяйтесь к бизнес‑сообществу KIT сегодня!
              </div>
              <div className="signup__form">
                <form
                  action="/api/signup"
                  method="POST"
                  className="signup-form"
                  aria-label="Форма регистрации"
                >
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон*"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      name="company"
                      placeholder="Название компании"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <select name="activity" required>
                      <option value="" disabled selected>
                        Вид деятельности
                      </option>
                      <option value="Строительство">Строительство</option>
                      <option value="Логистика">Логистика</option>
                      <option value="Экспортеры">Экспортеры</option>
                      <option value="Образование">Образование</option>
                      <option value="Здравоохранение">Здравоохранение</option>
                      <option value="HORECA">HORECA</option>
                      <option value="Консалтинг">Консалтинг</option>
                      <option value="IT">IT</option>
                      <option value="Прочие услуги">Прочие услуги</option>
                    </select>
                  </div>
                  <button type="submit" className="signup__btn">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ – список выгод для участников */}
      <section className="section benefits-section bg-cube-bottom">
        <div className="container">
          <div className="benefits__container">
            <div className="benefits__headline" data-aos="fade-right">
              Вместе с KIT вы приобретаете
            </div>
            <div className="benefits-slider" data-aos="fade-left">
              <div className="swiper-wrapper">
                {/* Преимущество 1 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ДЕЛОВЫЕ СВЯЗИ</div>
                      <div className="benefit-card__num">01</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность находить новых партнёров, клиентов, а также потенциальных инвесторов
                    </div>
                  </div>
                </div>
                {/* Преимущество 2 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ЭКОЛОГИЧНОЕ ОКРУЖЕНИЕ</div>
                      <div className="benefit-card__num">02</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность приобретать новых друзей среди единомышленников и соратников
                    </div>
                  </div>
                </div>
                {/* Преимущество 3 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">МАСШТАБИРОВАНИЕ БИЗНЕСА</div>
                      <div className="benefit-card__num">03</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность выхода на новые рынки, в том числе международные, благодаря инфраструктуре KIT
                    </div>
                  </div>
                </div>
                {/* Преимущество 4 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ВЗАИМОДЕЙСТВИЕ С ГОСУДАРСТВОМ</div>
                      <div className="benefit-card__num">04</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность доносить локальные вопросы бизнеса и системный доступ к госпрограммам поддержки
                    </div>
                  </div>
                </div>
                {/* Преимущество 5 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ОБМЕН ОПЫТОМ И ЗНАНИЯМИ</div>
                      <div className="benefit-card__num">05</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность делиться и перенимать практические инструменты ведения бизнеса от опытных предпринимателей
                    </div>
                  </div>
                </div>
                {/* Преимущество 6 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ПОЛЬЗА ДЛЯ ОБЩЕСТВА</div>
                      <div className="benefit-card__num">06</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность личного вклада в развитие общества совместно с единомышленниками
                    </div>
                  </div>
                </div>
                {/* Преимущество 7 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БЫТЬ В ТРЕНДЕ</div>
                      <div className="benefit-card__num">07</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность отслеживать и быть в тренде мировых инноваций и технологий в сфере бизнеса
                    </div>
                  </div>
                </div>
                {/* Преимущество 8 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БИЗНЕС ОБУЧЕНИЕ</div>
                      <div className="benefit-card__num">08</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность приобретать передовые знания от ТОП предпринимателей, спикеров и преподавателей МВА
                    </div>
                  </div>
                </div>
                {/* Преимущество 9 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ТРАНСФОРМАЦИЯ ЛИЧНОСТИ</div>
                      <div className="benefit-card__num">09</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность начать путь личностного роста, определить свои врождённые таланты и сформировать систему ценностей
                    </div>
                  </div>
                </div>
                {/* Преимущество 10 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ВЫСШИЕ ЦЕННОСТИ</div>
                      <div className="benefit-card__num">10</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность привносить в жизнь положительный пример семейных ценностей, нравственности и здорового образа жизни
                    </div>
                  </div>
                </div>
                {/* Преимущество 11 */}
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БИЗНЕС ПУТЕШЕСТВИЯ</div>
                      <div className="benefit-card__num">11</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность регулярных выездов за рубеж по специальным программам для расширения кругозора и эмоциональной перезагрузки
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-slider__nav" data-aos="fade-up">
              <div className="benefits-slider__btn benefits-slider__prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M5 12L11 18M5 12L11 6"
                    stroke="#69B3E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="benefits-slider__btn benefits-slider__next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 12H5M19 12L13 18M19 12L13 6"
                    stroke="#69B3E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
