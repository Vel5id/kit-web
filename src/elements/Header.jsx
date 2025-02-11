import React from 'react';
import { ReactComponent as MainLogo } from './MainLogo.svg';
import { ReactComponent as AdditionalLogo } from './AdditionalLogo.svg';
import './Header.css'; // Импортируйте свои стили, если необходимо

function handleClick(event) {
  event.preventDefault();
  console.log("Элемент был нажат!");
  // Дополнительная логика
}



const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
          <div className="header_full">
          {/* Логотип: клик по нему ведёт на главную страницу */}
          <a href="/" className="logo">
        <AdditionalLogo className="logo__svg_main" />
          </a>

          {/* Навигационное меню – 5 кнопок */}
          <div>
          <ul className="header__menu">
            <li id="about" className="menu-item">
              <a href="/about">О сообществе</a>
            </li>
            <li id="resident" className="menu-item">
              <a href="/residents">Резиденты</a>
            </li>
            <li id="products" className="menu-item">
              <a href="/products">Продукты</a>
            </li>
            <li id="news" className="menu-item">
              <a href="/news">Новости</a>
            </li>
            <li id="contacts" className="menu-item">
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
          </div>

          {/* Переключатель языков */}
          <div/>
          
          <div className="header__lang">
            <div className="trp_language_switcher_shortcode">
              <div className="trp-language-switcher trp-language-switcher-container" data-no-translation>
              <button onClick={handleClick} className="ChangeLanguage">Ru</button>
              </div>
            </div>
          </div>
          </div>
          
        </div>
    </header>
  );
};

export default Header;
