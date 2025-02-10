import React from 'react';
import './SectionFormBenefit.css';

const SectionFormBenefit = () => {
  return (
    <>
      {/* Секция формы KIT */}
      <section className="section bg-cube-top kit-form">
        <div className="container">
          <div className="kit-form__box" data-aos="zoom-in-up">
            <div className="kit-form__left">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201872%201650'%3E%3C/svg%3E"
                data-src="https://bakit.kz/wp-content/uploads/2024/10/kit-form.webp"
                className="kit-form__img lazy"
                alt="Kit Form"
              />
            </div>
            <div className="kit-form__right">
              <div className="kit-form__title">
                Не упустите шанс расширить свои возможности!
              </div>
              <div className="kit-form__desc">
                Присоединяйтесь к бизнес-сообществу KIT сегодня!
              </div>
              <div className="kit-form__form">
                {/* Форма обратной связи (WPCF7) */}
                <div className="wpcf7 no-js" id="wpcf7-f8-o1" lang="ru-RU" dir="ltr">
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form
                    action="https://bakit.kz/ru/#wpcf7-f8-o1"
                    method="Flag_for_Future"
                    className="wpcf7-form init"
                    aria-label="Контактная форма"
                    noValidate
                    data-status="init"
                  >
                    <div style={{ display: 'none' }}>
                      <input type="hidden" name="_wpcf7" value="8" />
                      <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                      <input type="hidden" name="_wpcf7_locale" value="ru_RU" />
                      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8-o1" />
                      <input type="hidden" name="_wpcf7_container_post" value="0" />
                      <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                    </div>
                    <span className="wpcf7-form-control-wrap" data-name="imya">
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Имя"
                        type="text"
                        name="imya"
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap" data-name="phone">
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required tel"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Телефон*"
                        type="text"
                        name="phone"
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap" data-name="company">
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Название компании"
                        type="text"
                        name="company"
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap" data-name="act-type">
                      <select
                        className="wpcf7-form-control wpcf7-select"
                        aria-invalid="false"
                        name="act-type"
                      >
                        <option value="Вид деятельности">Вид деятельности</option>
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
                    </span>
                    <button type="submit" className="modal-form__btn kit-form__btn">
                      Отправить
                    </button>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
                </div>
              </div>
              {/* Дополнительная форма (скрытая) */}
              <form className="kit-form__form" style={{ display: 'none' }}>
                <input type="text" placeholder="Имя*" required />
                <input className="tel" type="text" placeholder="Телефон*" required />
                <input type="text" placeholder="Название компании" />
                <select>
                  <option value="1" selected disabled>
                    Вид деятельности
                  </option>
                  <option value="2">IT</option>
                  <option value="3">Завод</option>
                  <option value="4">Общепит</option>
                </select>
                <button type="submit" className="kit-form__btn">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ KIT */}
      <section className="section kit-benefit bg-cube-bottom">
        <div className="container">
          <div className="kit-benefit__box">
            <div className="title kit-benefit__title" data-aos="fade-right">
              вместе с KIT вы приобретаете
            </div>
            <div className="swiper-kit-benefit" data-aos="fade-left">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ДЕЛОВЫЕ СВЯЗИ</div>
                      <div className="benefit-card__num">01</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность находить новых Партнеров, Клиентов, а также потенциальных Инвесторов
                    </div>
                  </div>
                </div>
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
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">МАСШТАБИРОВАНИЕ БИЗНЕСА</div>
                      <div className="benefit-card__num">03</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность выходить на новые рынки, в том числе международные, более динамично и уверенно за счет инфраструктуры KIT
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ВЗАИМОДЕЙСТВИЕ С ГОСУДАРСТВОМ</div>
                      <div className="benefit-card__num">04</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность доносить локальные вопросы своего Бизнеса, а также системный доступ к Гос. программам поддержки Предпринимателей
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ОБМЕН ОПЫТОМ И ЗНАНИЯМИ</div>
                      <div className="benefit-card__num">05</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность делиться и перенимать практические инструменты ведения Бизнеса у опытных, успешных Предпринимателей-практиков
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ПОЛЬЗА ДЛЯ ОБЩЕСТВА</div>
                      <div className="benefit-card__num">06</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность личного вклада в развитие Общества совместно с единомышленниками в рамках деятельности и идеологии Сообщества
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БЫТЬ В ТРЕНДЕ</div>
                      <div className="benefit-card__num">07</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность отслеживать и быть в тренде Мировых инноваций и технологий в сфере Бизнеса
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БИЗНЕС ОБУЧЕНИЕ</div>
                      <div className="benefit-card__num">08</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность приобретать передовые знания от ТОП Предпринимателей, Спикеров и Преподавателей МВА
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ТРАНСФОРМАЦИЯ ЛИЧНОСТИ</div>
                      <div className="benefit-card__num">09</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность в команде встать на путь личностного роста, через определение своих врождённых Талантов и формирование системы ценностей и убеждений для достижения целей и реализации персональной Миссии
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">ВЫСШИЕ ЦЕННОСТИ</div>
                      <div className="benefit-card__num">10</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность привносить в свою жизнь и нести положительный пример семейных ценностей, нравственности, экологичности, здорового образа жизни, взаимного уважения и поддержки
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="benefit-card">
                    <div className="benefit-card__heading">
                      <div className="benefit-card__title">БИЗНЕС ПУТЕШЕСТВИЯ</div>
                      <div className="benefit-card__num">11</div>
                    </div>
                    <div className="benefit-card__desc">
                      Возможность регулярных коллективных выездов за рубеж по специально организованным программам для расширения кругозора, практической насмотренности и эмоциональной перезагрузки
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-kit-benefit__nav" data-aos="fade-up">
              <div className="swiper-kit-benefit__btn swiper-kit-benefit__prev">
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
              <div className="swiper-kit-benefit__btn swiper-kit-benefit__next">
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

export default SectionFormBenefit;
