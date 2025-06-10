import React from "react";
import resilienceImg from "../../Assets/Images/resilience.png";
import ultravioletImg from "../../Assets/Images/ultraviolet.png";
import repairImg from "../../Assets/Images/repair.png";
import wipeImg from "../../Assets/Images/wipe.png";
import thermoImg from "../../Assets/Images/thermo.png";
import ecoImg from "../../Assets/Images/eco.png";
import "./About.css";
import { Container } from "@mui/material";

import DiamondIcon from "@mui/icons-material/Diamond";
import StraightenIcon from "@mui/icons-material/Straighten";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="features">
          <div className="features-container">
            {/* Карточка 1 */}
            <div className="feature-card">
              <div className="feature-icon">
                <span className="number">01</span>
                <span className="material-icons"><DiamondIcon/></span>
              </div>
              <h3>Премиум материалы</h3>
              <p>
                Работаем с сертифицированным камнем от ведущих мировых
                производителей
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="feature-card">
              <div className="feature-icon">
                <span className="number">02</span>
                <span className="material-icons"><StraightenIcon/></span>
              </div>
              <h3>3D-проектирование</h3>
              <p>
                Создаем точный проект будущего изделия с учетом всех
                особенностей помещения
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="feature-card">
              <div className="feature-icon">
                <span className="number">03</span>
                <span className="material-icons"><CheckCircleOutlineIcon/></span>
              </div>
              <h3>Гарантия качества</h3>
              <p>5 лет гарантии на <br/> все изделия из <br/> искусственного камня</p>
            </div>

            {/* Карточка 4 */}
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-icons"><ScheduleIcon/></span>
                <span className="number">04</span>
              </div>
              <h3>Точные сроки</h3>
              <p>Изготовление изделий любой сложности от 7 рабочих дней</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
