import React from 'react';
import { Link } from 'react-router-dom';
import './PastNewsBlock.css';

const PastNewsBlock = ({ pastNews }) => {
  return (
    <div style={{display:"flex", width:"98vw", height:"98vh",backgroundColor:"greenyellow" }}>
      <h2>Прошедшие новости</h2>
      <div className="news-list">
        {pastNews &&
          pastNews.map((item) => (
            <Link key={item.id} to={`/news/${item.id}`} className="news-item-link">
              <div className="news-item">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{objectFit:"cover", maxwidth:"20vw", height:"34vh", borderRadius:"2vh", margin:"0px", padding:"0px"}}
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PastNewsBlock;
