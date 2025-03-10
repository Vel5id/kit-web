import React, { useEffect } from 'react';
import './about.css';
import SubmitSectionAbout from '../../elements/about_elements/SubmitSection_About/SubmitSectionAbout';
import TeamSection from '../../elements/about_elements/Team/TeamSection';
import AboutMain from '../../elements/about_elements/AboutMain/AboutMain';
import IdeoligyView from '../../elements/about_elements/IdeoligyView/IdeoligyView';
import LoyalSlider from '../../elements/about_elements/LoyalSlider/LoyalSlider';
import FeedbacksSlider2 from '../../elements/about_elements/FeedBack_About/FeedbackSlider2';
import SocialPlus from '../../elements/about_elements/SocialPlus/SocialPlus';
import HotelDiscountSlider from '../../elements/Additional_Blocks_And_Effects/SliderBlocks/HotelDiscountSlider';

const About = () => {
  useEffect(() => {
    // Пример: инициализация библиотеки для анимаций (например, ScrollReveal)
    // ScrollReveal().reveal('.about-home__title', { duration: 1000, origin: 'left' });
    
    // Здесь можно добавить инициализацию любых плагинов или обработчиков событий,
    // которые зависят от DOM.
  }, []);

  return (
    <div className="about-page">
      <AboutMain/>
      <IdeoligyView/>
      <HotelDiscountSlider/>
      <FeedbacksSlider2/>
      <TeamSection/>
      <SubmitSectionAbout/>
    </div>
  );
};

export default About;
