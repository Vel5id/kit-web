import React from 'react';
import LatestNewsBlock from '../../elements/news_elements/NewsSection/LatestNewsBlock';
import PastNewsBlock from '../../elements/news_elements/NewsSection/PastNewsBlock';
import './News.css';

import nw1 from "../../images/News/1.jpg"
import nw2 from '../../images/News/2.jpg';
import nw3 from '../../images/News/3.jpg';
import nw4 from '../../images/News/4.jpg';

const News = () => {
  // Пример данных для новостей
  const latestNews = {
    id: '1',
    title: 'Старт программы KIT MBA',
    summary: "Одно из главных событий для Бизнес Сообщества KIT этого февраля — старт программы EMBA 'Хан-Тенгри' Первый модуль обучения — “Операционный менеджмент”- прошел 23- 25 февраля 2024 года. За два дня Резиденты и участники программы изучили: стратегический менеджмент и воронку стратегии; PESTEL-анализ; конкурентную стратегию; разные школы стратегии; выстраивание пути от бизнес-стратегии к операционной стратегии; цепочку формирования ценности и операционный менеджмент; управление процессами; контролирование процессной деятельности; практикум процессного инжиниринга. Все теоретические знания сопровождались подробными разборами реальных кейсов компаний: Siemens-РОСАТОМ, Автоваз и Юго-западные авиалинии.",
    image: nw1
  };

  const pastNews = [
    {
      id: '2',
      title: 'Прошлая новость 1',
      summary: 'Краткое описание новости 1.',
      image: nw2
    },
    {
      id: '3',
      title: 'Прошлая новость 2',
      summary: 'Краткое описание новости 2.',
      image: nw3
    },
    {
      id: '4',
      title: 'Прошлая новость 3',
      summary: 'Краткое описание новости 3.',
      image: nw4
    }
    // можно добавить больше новостей
  ];

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <LatestNewsBlock latestNews={latestNews} />
        <PastNewsBlock pastNews={pastNews} /> 
      </div>
    </div>
  );
};

export default News;
