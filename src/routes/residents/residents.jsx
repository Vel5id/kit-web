import React from 'react';
import { Link } from 'react-router-dom';
import './residents.css';

import resident1 from "../../images/Residents/1.jpg";
import resident2 from "../../images/Residents/2.jpg";
import resident3 from "../../images/Residents/3.jpg";
import resident4 from "../../images/Residents/4.jpg";
import resident5 from "../../images/Residents/5.webp";

const Residents = () => {
  const residentsList = [
    {
      id: '1',
      name: 'Резидент 1',
      activity: 'Предприниматель',
      description: 'Краткое описание резидента 1.',
      image: resident1,
    },
    {
      id: '2',
      name: 'Резидент 2',
      activity: 'Бизнес-аналитик',
      description: 'Краткое описание резидента 2.',
      image: resident2,
    },
    {
      id: '3',
      name: 'Резидент 3',
      activity: 'Маркетолог',
      description: 'Краткое описание резидента 3.',
      image: resident3,
    },
    {
      id: '4',
      name: 'Резидент 4',
      activity: 'Маркетолог',
      description: 'Краткое описание резидента 3.',
      image: resident4,
    },
    // Добавь ещё резидентов, если нужно
  ];

  return (
    <div className="residents-container">
      <div className="residents-header">Наши Резиденты</div>
      <div className="residents-list">
        {residentsList.map((resident) => (
          <Link
            key={resident.id}
            to={`/residents/${resident.id}`}
            className="resident-card-link"
            state={{ name: resident.name, activity: resident.activity, description: resident.description, image: resident.image }}
          >
            <div className="resident-card">
              {resident.image && (
                <img
                  src={resident.image}
                  alt={resident.name}
                  className="resident-image"
                />
              )}
              <div className="resident-name">{resident.name}</div>
              <div className="resident-activity">{resident.activity}</div>
              <div className="resident-description truncated-text">
                {resident.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Residents;
