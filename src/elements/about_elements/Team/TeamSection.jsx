import React from 'react';
import PhotoSlider from './AboutPhotoSlider';

const TeamSection = () => {
  return (
    <div className="EventContainer" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "98%", height: "100vh", backgroundColor:"", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"20vh", marginBottom:"20vh", borderRadius:"4vh"}}>
        <div style={{display:"flex", width:"98%", height:"10vh", flexDirection:"column", bottom:"20vh"}}>
            <div style={{display:"flex", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"8vh", fontWeight:"600", color:"rgb(24, 96, 155)"}}>
              Команда
            </div>
            <div style={{display:"flex", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"4vh", fontWeight:"500", color:"rgb(0, 0, 0)"}}>
              Наша команда – это специалисты, увлеченные своим делом и нацеленные на высокие результаты. 
            </div>
        </div>
        <div style={{display:"flex", width:"98%", height:"80vh"}}>
            <PhotoSlider/>
        </div>
    </div>
  );
};

export default TeamSection;
