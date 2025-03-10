import React from 'react';
import { Link } from 'react-router-dom';
import './PastNewsBlock.css';

const PastNewsBlock = ({ pastNews }) => {
  return (
    <div className="past-news-container">
      <div className="past-news-header">Прошедшие новости</div>
      <div className="past-news-list">
        {pastNews && pastNews.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="past-news-item-link"
            state={{ title: item.title, summary: item.summary, image: item.image }}
          >
            <div className="past-news-item">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="past-news-image"
                />
              )}
              <div className="past-news-title">{item.title}</div>
              <div className="past-news-summary truncated-text">{item.summary}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PastNewsBlock;
