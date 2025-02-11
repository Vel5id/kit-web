import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  useEffect(() => {
    // Пример: инициализация библиотеки для анимаций (например, ScrollReveal)
    // ScrollReveal().reveal('.about-home__title', { duration: 1000, origin: 'left' });
    
    // Здесь можно добавить инициализацию любых плагинов или обработчиков событий,
    // которые зависят от DOM.
  }, []);

  return (
    <div className="about-page">
      <main className="main">
        <section className="section about-home bg-cube-top bg-cube-bottom first-sec">
          <div className="container">
            <h1 className="about-home__title title" data-aos="fade-right">
              О сообществе
            </h1>
            <div className="about-home__box">
              <div className="ah-card ah-card_mission" data-aos="fade-in">
                <h2 className="ah-card__title">Миссия</h2>
                <p className="ah-card__desc">
                  Мы Глобальное Бизнес-Сообщество. Создаем Международную Инфраструктуру
                  Всесторонней Трансформации Резидентов и развиваем культуру Предпринимательства.
                </p>
              </div>
              <div className="ah-card ah-card_values" data-aos="fade-in" data-aos-delay="200">
                <h2 className="ah-card__title">Ценности</h2>
                <div className="ah-card__box">
                  <div className="ah-card__val">
                    <p className="ah-card__desc ah-card__val-left">СОВЕРШЕНСТВОВАНИЕ</p>
                    <p className="ah-card__desc ah-card__right">каждого</p>
                  </div>
                  <div className="ah-card__val">
                    <p className="ah-card__desc ah-card__val-left">СИНЕРГИЯ</p>
                    <p className="ah-card__desc ah-card__right">всех</p>
                  </div>
                  <div className="ah-card__val">
                    <p className="ah-card__desc ah-card__val-left">СОЗИДАНИЕ</p>
                    <p className="ah-card__desc ah-card__right">вклад в Общество</p>
                  </div>
                </div>
              </div>
              <div className="ideology" data-aos="fade-in" data-aos-delay="300">
                <h2 className="ideology__title">Идеология</h2>
                <div className="ideology-card">
                  <div className="ideology-card__heading">
                    {/* Пример SVG */}
                    <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9366 7.80511C18.091 7.64607 16.2029 7.76149 14.4021 8.1947C13.6962 8.36799 12.976 8.58461 12.2993 8.8879C11.3681 11.0546 10.8552 13.3368 10.862 15.8647C10.9019 20.0393 12.1235 24.0551 13.561 27.9265L18.8168 25.7601L16.6348 45.4051L0.8893 33.1257L5.72755 31.1327C3.82154 24.5312 3.35611 17.5687 7.92483 11.8055C10.1662 9.01775 12.7104 6.25895 15.4721 4.00574C17.0831 2.69137 18.9258 1.76703 20.9571 1.2905C25.0052 0.308551 29.3603 0.944457 33.1559 2.54813C37.2833 4.31073 40.8087 7.31555 43.255 11.1148C43.53 11.5192 40.4817 14.4225 40.1511 14.7691C39.9211 15.0291 36.7147 18.1201 36.6712 18.0334C33.0089 12.3129 26.7276 8.34008 19.9366 7.80511Z" fill="#147BD1"/>
                    </svg>
                    <div className="ideology-card__subtitle">Хаотичный бизнес</div>
                    <div className="ideology-card__title">Созидательный бизнес</div>
                  </div>
                  <div className="ideology-card__desc-box">
                    <p className="ideology-card__desc">
                      Это бизнес, направленный на создание новых ценностей на рынке с учетом интересов
                      общества и будущих поколений, на базе экологичных, эффективных и инновационных технологий.
                    </p>
                  </div>
                </div>
                <div className="ideology-card">
                  <div className="ideology-card__heading">
                    <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9366 7.80511C18.091 7.64607 16.2029 7.76149 14.4021 8.1947C13.6962 8.36799 12.976 8.58461 12.2993 8.8879C11.3681 11.0546 10.8552 13.3368 10.862 15.8647C10.9019 20.0393 12.1235 24.0551 13.561 27.9265L18.8168 25.7601L16.6348 45.4051L0.8893 33.1257L5.72755 31.1327C3.82154 24.5312 3.35611 17.5687 7.92483 11.8055C10.1662 9.01775 12.7104 6.25895 15.4721 4.00574C17.0831 2.69137 18.9258 1.76703 20.9571 1.2905C25.0052 0.308551 29.3603 0.944457 33.1559 2.54813C37.2833 4.31073 40.8087 7.31555 43.255 11.1148C43.53 11.5192 40.4817 14.4225 40.1511 14.7691C39.9211 15.0291 36.7147 18.1201 36.6712 18.0334C33.0089 12.3129 26.7276 8.34008 19.9366 7.80511Z" fill="#147BD1"/>
                    </svg>
                    <div className="ideology-card__subtitle">Бессознательная личность</div>
                    <div className="ideology-card__title">Созидательная личность</div>
                  </div>
                  <div className="ideology-card__desc-box">
                    <p className="ideology-card__desc">
                      Это человек, который создает новые ценности для будущих поколений, искренне и бескорыстно
                      придавая большое значение тому, что все работает на благо общества.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Другие секции (скидки, отзывы, проекты, форма) можно добавить аналогичным образом */}
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__top-box">
              <a href="/" className="footer__logo">
                {/* SVG логотипа для подвала */}
              </a>
              <nav className="footer__nav">
                <ul>
                  <li><a href="/about">О сообществе</a></li>
                  <li><a href="/residents">Резиденты</a></li>
                  <li><a href="/news">Новости</a></li>
                  <li><a href="/contacts">Контакты</a></li>
                </ul>
              </nav>
              <div className="footer__contacts">
                <a href="tel:+77007370535">+7 700 737 0535</a>
                <address>г. Астана, Микрорайон Самал, 11, кабинет 1, 2 этаж</address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-box">
              <a href="/privacy" className="footer__link footer__link_underline">Политика конфиденциальности</a>
              <a href="#" className="footer__link">Сделано FACTUM</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
