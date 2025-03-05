import React from 'react';
import { Link } from 'react-router-dom';
import './Residents.css';

const Residents = () => {
  // Пример данных для резидентов
  const residentsList = [
    {
      id: '1',
      name: 'Резидент 1',
      description: 'Краткое описание резидента 1.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: '2',
      name: 'Резидент 2',
      description: 'Краткое описание резидента 2.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: '3',
      name: 'Резидент 3',
      description: 'Краткое описание резидента 3.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="residents-page">
      <h1>Наши Резиденты</h1>
      <div className="residents-list">
        {residentsList.map((resident) => (
          <Link key={resident.id} to={`/residents/${resident.id}`} className="resident-card-link">
            <div className="resident-card">
              {resident.image && (
                <img src={resident.image} alt={resident.name} className="resident-image" />
              )}
              <h3>{resident.name}</h3>
              <p>{resident.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Residents;
