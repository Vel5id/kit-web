import React from 'react';
import './Header.css'; // Импортируйте свои стили, если необходимо

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          {/* Логотип: клик по нему ведёт на главную страницу */}
          <a href="/" className="logo">
            {/* SVG-логотип для светлого фона */}
            <svg
              className="logo__svg_white"
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="48"
              viewBox="0 0 99 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.044 0L27.9226 3.1915H22.044H16.1655L22.044 0ZM12.4246 5.36171L21.9104 10.5958L31.3963 5.36171L43.0197 11.617L22.044 23.2341L1.06836 11.617L12.4246 5.36171Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.9557 36.3831L38.0771 39.5746L41.0164 34.7235L43.9557 29.8724V36.3831ZM43.8221 25.7873L34.3362 31.0214V41.4895L22.98 47.8725V24.766L43.9557 13.149L43.8221 25.7873Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 36.3829V29.8723L2.93927 34.7233L5.87854 39.5744L0 36.3829ZM9.61942 41.617V31.1489L0.133604 25.9148V13.2765L21.1093 24.8935V48L9.61942 41.617Z"
                fill="white"
              />
              <path
                d="M58.652 24.6386H52.7734V5.36194H58.652V13.4045L64.5305 5.36194H70.409L63.4617 14.8088L71.2107 24.7662H64.3969L58.5184 16.7237V24.6386H58.652ZM93.2552 9.57471V24.6386H87.3766V9.57471H81.4981V5.36194H99.0001V9.70237H93.2552V9.57471ZM78.9596 24.6386H73.0811V5.36194H78.9596C78.9596 11.7449 78.9596 18.2556 78.9596 24.6386Z"
                fill="white"
              />
              <path
                d="M52.7735 34.8512V28.7235H54.9111C55.5792 28.7235 56.1136 28.8512 56.5144 29.1065C56.9152 29.3618 57.0488 29.7448 57.0488 30.3831C57.0488 30.6384 56.9152 30.8938 56.7816 31.1491C56.648 31.4044 56.3808 31.5321 56.1136 31.6597C56.5144 31.7874 56.7816 31.915 56.9152 32.1704C57.1824 32.4257 57.1824 32.681 57.1824 33.064C57.1824 33.5746 57.0488 34.0853 56.648 34.3406C56.2472 34.5959 55.7128 34.8512 55.0447 34.8512H52.7735Z"
                fill="white"
              />
            </svg>
            {/* SVG-логотип для основного варианта */}
            <svg
              className="logo__svg_main"
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="48"
              viewBox="0 0 99 48"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.044 0L27.9226 3.1915H22.044H16.1655L22.044 0ZM12.4246 5.36171L21.9104 10.5958L31.3962 5.36171L43.0197 11.617L22.044 23.2341L1.06836 11.617L12.4246 5.36171Z"
                fill="#004677"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.9561 36.383L38.0776 39.5745L41.0169 34.7234L43.9561 29.8724V36.383ZM43.8225 25.7872L34.3367 31.0213V41.4894L22.9805 47.8724V24.766L43.9561 13.1489L43.8225 25.7872Z"
                fill="#69B3E7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 36.3829V29.8723L2.93927 34.7233L5.87854 39.5744L0 36.3829ZM9.61942 41.617V31.1489L0.133604 25.9148V13.2765L21.1093 24.8935V48L9.61942 41.617Z"
                fill="#147BD1"
              />
              <path
                d="M58.652 24.6385H52.7734V5.36188H58.652V13.4044L64.5305 5.36188H70.409L63.4617 14.8087L71.2107 24.7662H64.3969L58.5184 16.7236V24.6385H58.652ZM93.2552 9.57465V24.6385H87.3766V9.57465H81.4981V5.36188H99.0001V9.70231H93.2552V9.57465ZM78.9596 24.6385H73.0811V5.36188H78.9596C78.9596 11.7449 78.9596 18.2555 78.9596 24.6385Z"
                fill="#004677"
              />
              <path
                d="M52.7735 34.8513V28.7236H54.9111C55.5792 28.7236 56.1136 28.8513 56.5144 29.1066C56.9152 29.3619 57.0488 29.7449 57.0488 30.3832C57.0488 30.6385 56.9152 30.8938 56.7816 31.1491C56.648 31.4045 56.3808 31.5321 56.1136 31.6598C56.5144 31.7874 56.7816 31.9151 56.9152 32.1704C57.1824 32.4257 57.1824 32.6811 57.1824 33.064C57.1824 33.5747 57.0488 34.0853 56.648 34.3406C56.2472 34.596 55.7128 34.8513 55.0447 34.8513H52.7735Z"
                fill="#004677"
              />
            </svg>
          </a>

          {/* Навигационное меню – 5 кнопок */}
          <ul className="header__menu">
            <li id="menu-item-255" className="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="o-soobshhestve/index.html">О сообществе</a>
            </li>
            <li id="menu-item-254" className="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="rezidenty/index.html">Резиденты</a>
            </li>
            <li id="menu-item-253" className="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="produkty/index.html">Продукты</a>
            </li>
            <li id="menu-item-256" className="menu-item menu-item-type-taxonomy menu-item-object-category">
              <a href="category/news/index.html">Новости</a>
            </li>
            <li id="menu-item-252" className="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="kontakty/index.html">Контакты</a>
            </li>
          </ul>

          {/* Переключатель языков */}
          <div className="header__lang">
            <div className="trp_language_switcher_shortcode">
              <div className="trp-language-switcher trp-language-switcher-container" data-no-translation>
                {/* Здесь может располагаться виджет для смены языка */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
