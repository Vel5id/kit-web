import separator_logo from "./svg/separator_logo.svg";
import k from "./svg/k.svg";
import i from "./svg/i.svg";
import t from "./svg/t.svg";
import React from 'react';
import "./LogoHoverEffect.css"; // Импортируйте файл с анимацией

const Separator = () => {
  return (
    <div style={{display:"flex", width:"100%", height:"50vh", padding:"30px", marginTop:"30vh", marginBottom:"30vh", flexDirection:"row"}}>
        <div style={{display:"flex", width:"30%", height:"40vh"}}>
            <img src={separator_logo} alt="Logo" className="logo-hover" style={{paddingLeft:"40px", height:"35vh"}}/>
        </div>
        <div style={{display:"flex", width:"80%", height:"40vh", backgroundColor:"rgb(240, 240, 240)", alignItems:"center"}}>
            <div style={{display:"flex", width:"100%", height:"30vh", justifyContent:"center"}}>
                <div style={{display:"flex", width:"30%", justifyContent:"center"}}>
                <img src={k} alt="Logo" className="logo-hover" />
                </div>
                <div style={{display:"flex", borderLeftStyle: "solid", borderLeftColor:"rgb(167, 167, 167)", borderLeftWidth:"1px", width:"30%", justifyContent:"center"}}>
                <img src={i} alt="Logo" className="logo-hover" />
                </div>
                <div style={{display:"flex", borderLeftStyle: "solid", borderLeftColor:"rgb(167, 167, 167)", borderLeftWidth:"1px", width:"30%", justifyContent:"center"}}>
                <img src={t} alt="Logo" className="logo-hover" />
                </div>
            </div>
        </div>

    </div>
);
};

export default Separator;
