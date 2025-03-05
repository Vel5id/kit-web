import React from 'react';
import { Link } from 'react-router-dom';
import './LatestNewsBlock.css';

const LatestNewsBlock = ({ latestNews }) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column", marginBottom:"20vh"}}>
      <div className="text-info-high" style={{ fontWeight: 700, fontSize:"12vh", color:"rgb(24, 96, 155)", alignSelf:"flex-start", marginLeft:"5vh", padding:"0px", width:"94vw", height:"16vh"}}>
        Последняя Новость
      </div>
      <div style={{display:"flex", width:"92vw", height:"84vh", backgroundColor:"rgb(240,240,240)", flexDirection:"column", alignItems:"center", padding:"2vh", borderRadius:"3vw", justifyContent:"center"}}>
        {latestNews && (
          <Link
            to={`/news/${latestNews.id}`}
            className="news-item-link"
            state={{
              title: latestNews.title,
              summary: latestNews.summary,
              image: latestNews.image
            }}
          >
            <div className="news-item" style={{display:"flex", flexDirection:"row", width:"92vw", alignItems:"center"}}>
              {latestNews.image && (
                <img
                  src={latestNews.image}
                  alt={latestNews.title}
                  style={{objectFit:"cover", width:"34vw", height:"84vh", borderTopLeftRadius:"3vw", borderBottomLeftRadius:"3vw", margin:"0px", padding:"0px"}}
                />
              )}
              <div style={{flexDirection:"column", padding:"2vh 2vw", height:"80vh", width:"56vw"}}>
                <div style={{display:"flex", width:"54vw", height:"12vh", backgroundColor:"rgb(24, 96, 155)", borderRadius:"1.5vw", color:"#fff", justifyContent:"center", alignItems:"center", fontSize:"3vw", fontWeight:"600"}}>
                  {latestNews.title}
                </div>
                <div className="truncated-text" style={{display:"flex", width:"54vw", height:"60vh", marginTop:"4vh", backgroundColor:"#fff", borderRadius:"1.5vw", color:"#111", fontSize:"1.5vw", fontWeight:"600", padding:"2vw"}}>
                  {latestNews.summary}
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LatestNewsBlock;
