import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const NewsDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  // Попытка получить дополнительные данные из state
  const { title, summary, image } = location.state || {};

  return (
    <div style={{ display:"flex", width:"98vw", height:"98vh", backgroundColor:"greenyellow", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <h1>Детальная новость: {title || "Без названия"}</h1>
      <p>Здесь будет подробная информация о новости с id: {id}</p>
      <p>Краткое описание: {summary || "Нет описания"}</p>
      {image && <img src={image} alt={title} style={{maxWidth:"80vw", maxHeight:"50vh", objectFit:"cover", borderRadius:"1vw"}} />}
    </div>
  );
};

export default NewsDetailPage;
