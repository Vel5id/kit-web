import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './NewsDetailPage.css';

const NewsDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, summary, image } = location.state || {};

  return (
    <div className="news-detail-container">
      <div className="news-detail-header">
        {title || "Без названия"}
      </div>
      <div className="news-detail-content">
        {image && (
          <img
            src={image}
            alt={title}
            className="news-detail-image"
          />
        )}
        <div className="news-detail-summary">
          {summary || "Нет описания"}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
