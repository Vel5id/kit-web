import React from 'react';
import { useParams } from 'react-router-dom';
import './ResidentDetailPage.css';

const ResidentDetailPage = () => {
  const { id } = useParams();

  // Пример данных резидентов (обычно данные получают с сервера)
  const residentsData = {
    '1': {
      name: 'Резидент 1',
      details: 'Подробная информация о резиденте 1. Здесь можно описать опыт, достижения и другую информацию.',
      image: 'https://via.placeholder.com/600x400',
    },
    '2': {
      name: 'Резидент 2',
      details: 'Подробная информация о резиденте 2. Здесь можно описать опыт, достижения и другую информацию.',
      image: 'https://via.placeholder.com/600x400',
    },
    '3': {
      name: 'Резидент 3',
      details: 'Подробная информация о резиденте 3. Здесь можно описать опыт, достижения и другую информацию.',
      image: 'https://via.placeholder.com/600x400',
    },
  };

  const resident = residentsData[id];

  if (!resident) {
    return <div>Резидент не найден</div>;
  }

  return (
    <div className="resident-detail-page">
      {resident.image && (
        <img src={resident.image} alt={resident.name} className="resident-detail-image" />
      )}
      <h1>{resident.name}</h1>
      <p>{resident.details}</p>
    </div>
  );
};

export default ResidentDetailPage;
