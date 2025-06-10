import React from "react";
import "./Preivew.css";
import { Container } from "@mui/material";
import ImgSliderOne from "../../Assets/Images/gallery/slider-five.png";
import ImgSliderTwo from "../../Assets/Images/gallery/slider-one.png";
import ImgSliderThree from "../../Assets/Images/gallery/slider-eight.png";

const Preview = () => {
  return (
    <section className="product">
      <Container>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-item">
              <div className="product-overlay">
                <h2>Раковины</h2>
              </div>
              <img src={ImgSliderOne} alt="Диван" className="product-image" />
            </div>
          </div>
          <div className="product-card">
            <div className="product-item">
              <div className="product-overlay">
                <h2>Кухни</h2>
              </div>
              <img src={ImgSliderTwo} alt="Диван" className="product-image" />
            </div>
          </div>
          <div className="product-card">
            <div className="product-item">
              <div className="product-overlay">
                <h2>Стойки</h2>
              </div>
              <img src={ImgSliderThree} alt="Диван" className="product-image" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Preview;
