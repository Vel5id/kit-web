import React from 'react';

const IdeoligyView = () => {
  return (
    <div style={{display:"flex", width:"100vw", height:"80vh", justifyContent:"center",alignItems:"center", marginTop:"10vh"}}>
    <div style={{display:"flex", width:"96vw", height:"80vh", flexDirection:"column", backgroundColor:"rgb(240, 240, 240)", borderRadius:"3vw"}}>
        <div style={{display:"flex", width:"96vw", height:"16vh", flexDirection:"row", margin:"2vh", fontSize:"14vh", fontWeight:"700", color:"#004677", marginLeft:"2vw"}}>Идеология</div>
        <div style={{display:"flex", width:"96vw", height:"70vh", flexDirection:"row"}}>
            <div style={{display:"flex", width:"46vw", height:"50vh", flexDirection:"column", margin:"2vh", backgroundColor:"#fff", borderRadius:"1.75vw"}}>
                <div style={{display:"flex", padding:"0px", margin:"0px", width:"46vw", height:"12vh", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                  <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9366 7.80511C18.091 7.64607 16.2029 7.76149 14.4021 8.1947C13.6962 8.36799 12.976 8.58461 12.2993 8.8879C11.3681 11.0546 10.8552 13.3368 10.862 15.8647C10.9019 20.0393 12.1235 24.0551 13.561 27.9265L18.8168 25.7601L16.6348 45.4051L0.8893 33.1257L5.72755 31.1327C3.82154 24.5312 3.35611 17.5687 7.92483 11.8055C10.1662 9.01775 12.7104 6.25895 15.4721 4.00574C17.0831 2.69137 18.9258 1.76703 20.9571 1.2905C25.0052 0.308551 29.3603 0.944457 33.1559 2.54813C37.2833 4.31073 40.8087 7.31555 43.255 11.1148C43.53 11.5192 40.4817 14.4225 40.1511 14.7691C39.9211 15.0291 36.7147 18.1201 36.6712 18.0334C33.0089 12.3129 26.7276 8.34008 19.9366 7.80511Z" fill="#147BD1"/>
                  </svg>
                  <h2 style={{fontSize:"4vh", fontWeight:"200", color:"rgb(66, 66, 66)", padding:"0px",margin:"0px", textAlign:"center"}}>Хаотичный бизнес</h2>
                </div>
                <h2 style={{fontSize:"3vw", fontWeight:"600", color:"rgb(92, 129, 199)", padding:"0px",margin:"0px", textAlign:"center"}}>Созидательный бизнес</h2>
                <p style={{fontSize:"3vh", fontWeight:"600", color:"rgb(102, 102, 102)", paddingLeft:"2vh", paddingRight:"2vh",margin:"0px", textAlign:"left", marginLeft:"1vw"}}>
                    <br/>
                    Это бизнес направленный на создание новых ценностей на рынке, с учётом интересов общества и будущих поколений, на базе экологичных, эффективных и инновационных технологий. 
                    <br/>
                </p>
            </div>
            <div style={{display:"flex", width:"46vw", height:"50vh", flexDirection:"column", margin:"2vh", backgroundColor:"#fff", borderRadius:"1.75vw"}}>
                <div style={{display:"flex", padding:"0px", margin:"0px", width:"46vw", height:"12vh", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                  <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9366 7.80511C18.091 7.64607 16.2029 7.76149 14.4021 8.1947C13.6962 8.36799 12.976 8.58461 12.2993 8.8879C11.3681 11.0546 10.8552 13.3368 10.862 15.8647C10.9019 20.0393 12.1235 24.0551 13.561 27.9265L18.8168 25.7601L16.6348 45.4051L0.8893 33.1257L5.72755 31.1327C3.82154 24.5312 3.35611 17.5687 7.92483 11.8055C10.1662 9.01775 12.7104 6.25895 15.4721 4.00574C17.0831 2.69137 18.9258 1.76703 20.9571 1.2905C25.0052 0.308551 29.3603 0.944457 33.1559 2.54813C37.2833 4.31073 40.8087 7.31555 43.255 11.1148C43.53 11.5192 40.4817 14.4225 40.1511 14.7691C39.9211 15.0291 36.7147 18.1201 36.6712 18.0334C33.0089 12.3129 26.7276 8.34008 19.9366 7.80511Z" fill="#147BD1"/>
                  </svg>
                  <h2 style={{fontSize:"4vh", fontWeight:"200", color:"rgb(66, 66, 66)", padding:"0px",margin:"0px", textAlign:"center"}}>Бессознательная личность</h2>
                </div>
                <h2 style={{fontSize:"3vw", fontWeight:"600", color:"rgb(92, 129, 199)", padding:"0px",margin:"0px", textAlign:"center"}}>Созидательная личность</h2>
                <p style={{fontSize:"3vh", fontWeight:"600", color:"rgb(102, 102, 102)", paddingLeft:"2vh", paddingRight:"2vh",margin:"0px", textAlign:"left", marginLeft:"1vw"}}>
                    <br/>
                    Это кто создает новые ценности для будущих поколений (даже в условиях неопределённости и дефицита ресурсов), искренне и бескорыстно, придавая этому большие смыслы и получает удовольствие от того, что все это работает на благо общества. 
                    <br/>
                </p>
            </div>
        </div>
    </div>
    </div>
);
};

export default IdeoligyView;
