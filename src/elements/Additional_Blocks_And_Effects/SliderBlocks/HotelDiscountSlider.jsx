import React from 'react';
import './HotelDiscountSlider.css';

import h1 from "../../../images/Discount/1.png";
import h2 from "../../../images/Discount/2.png";
import h3 from "../../../images/Discount/3.png";
import h4 from "../../../images/Discount/4.png";
import h5 from "../../../images/Discount/5.png";
import h6 from "../../../images/Discount/6.png";
import h7 from "../../../images/Discount/7.png";
import h8 from "../../../images/Discount/8.png";
import h9 from "../../../images/Discount/9.png";
import h10 from "../../../images/Discount/10.png";
import h11 from "../../../images/Discount/11.png";
import h12 from "../../../images/Discount/12.png";
import h13 from "../../../images/Discount/13.png";
import h14 from "../../../images/Discount/14.png";
import h15 from "../../../images/Discount/15.png";

const images1 = [h9, h10, h11, h12, h13, h14, h15];
const images2 = [h1, h2, h3, h4, h5, h6, h7, h8];

const HotelDiscountSlider = () => {
    return (
      <div className="hotel-discount-container">
        <div className="hotel-discount-heading">
          <div className="hotel-discount-title">ЛОЯЛЬНЫЕ СКИДКИ ОТ ОТЕЛЕЙ</div>
          <div className="hotel-discount-subtitle">
            до <span className="hotel-discount-percent">50%</span>
          </div>
        </div>
        <div className="hotel-discount-swiper">
          <div className="slider-row slider-row-left">
            <div className="slider-track">
              {[...images1, ...images1].map((img, index) => (
                <div className="slider-image-wrapper" key={`left-${index}`}>
                  <img src={img} alt={`left-${index}`} />
                </div>
              ))}
            </div>
          </div>
  
          <div className="slider-row slider-row-right">
            <div className="slider-track reverse">
              {[...images2, ...images2].map((img, index) => (
                <div className="slider-image-wrapper" key={`right-${index}`}>
                  <img src={img} alt={`right-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HotelDiscountSlider;
