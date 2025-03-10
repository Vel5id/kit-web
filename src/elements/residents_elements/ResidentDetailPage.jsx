import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ResidentDetailPage.css';

const ResidentDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const { name, activity, description, image } = location.state || {};

  return (
    <div className="resident-detail-container">
      <div className="resident-detail-header">{name || "Резидент"}</div>
      <div className="resident-detail-content">
        {image && (
          <img
            src={image}
            alt={name}
            className="resident-detail-image"
          />
        )}
        <div className="resident-detail-text">
          <div className="resident-detail-activity">{activity || "Род деятельности не указан"}</div>
          <div className="resident-detail-info">
            {description || "Нет дополнительной информации о резиденте."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDetailPage;