import React from 'react';
import PhotoSlider from './blocks/PhotoSlider';

const EventSection = () => {
  return (
    <div className="EventContainer" style={{display: "flex", flexDirection: "column", color: "darkblue", width: "98%", height: "100vh", marginTop: "5%", backgroundColor:"", alignItems:"center", justifyContent:"center", marginLeft:"1%",marginTop:"20vh", marginBottom:"20vh", borderRadius:"4vh"}}>
        <div style={{display:"flex", width:"98%", height:"10vh", flexDirection:"column"}}>
            <div style={{display:"flex", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"8vh", fontWeight:"600", color:"rgb(24, 96, 155)"}}>
            <span style={{ color: "orange",paddingRight:"2vh" }}>150+ </span>  МЕРОПРИЯТИЙ В ГОД
            </div>
            <div style={{display:"flex", height:"100%", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", fontSize:"4vh", fontWeight:"500", color:"rgb(0, 0, 0)"}}>
            Со спикерами из FORBES, мировых бизнес-школ, состоявшимися предпринимателями и признанными экспертами 
            </div>
        </div>
        <div style={{display:"flex", width:"98%", height:"70vh"}}>
            <PhotoSlider/>
        </div>
    </div>
  );
};

export default EventSection;
