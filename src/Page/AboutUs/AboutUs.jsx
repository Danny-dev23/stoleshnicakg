import React from "react";
import "./AboutUs.css";
import { Container } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import PaletteIcon from "@mui/icons-material/Palette";
import HandymanIcon from "@mui/icons-material/Handyman";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const AboutUs = () => {
  const achievements = [
    {
      number: "15+",
      title: "Лет опыта",
      description: "в сфере дизайна и производства"
    },
    {
      number: "1000+",
      title: "Довольных клиентов",
      description: "по всему Кыргызстану"
    },
    {
      number: "50+",
      title: "Уникальных дизайнов",
      description: "разработано нашей командой"
    },
    {
      number: "100%",
      title: "Гарантия качества",
      description: "на все наши изделия"
    }
  ];

  const values = [
    {
      icon: <DiamondIcon />,
      title: "Качество",
      description: "Используем только премиальные материалы и современные технологии производства"
    },
    {
      icon: <PaletteIcon />,
      title: "Индивидуальность",
      description: "Каждое изделие создается с учетом уникальных потребностей и стиля клиента"
    },
    {
      icon: <HandymanIcon />,
      title: "Мастерство",
      description: "Наша команда профессионалов имеет многолетний опыт в работе с камнем"
    },
    {
      icon: <VerifiedIcon />,
      title: "Надежность",
      description: "Гарантируем долговечность и функциональность каждого изделия"
    }
  ];

  return (
    <div className="about-us">
      <Container>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">О нашей компании</h1>
            <p className="about-hero-subtitle">
              15 лет создаем уникальные изделия из искусственного камня
            </p>
            <div className="about-hero-description">
              <p>
                Мы - компания, которая вот уже 15 лет является лидером в сфере дизайна 
                и производства уникальных изделий из искусственного камня. Наша миссия - 
                превращать идеи в реальность, создавая дизайны, которые подчеркивают 
                индивидуальность каждого клиента.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Наша миссия</h2>
              <h3 className="mission-subtitle">
                Уникальные дизайны, выражающие ваш стиль
              </h3>
              <p className="mission-description">
                Мы специализируемся на разработке уникальных дизайнов столешниц и раковин, 
                которые отличаются своей оригинальностью и индивидуальностью. В каждом 
                изделии мы стремимся выразить вашу уникальную эстетику и стиль.
              </p>
              <p className="mission-description">
                Наша команда профессионалов использует передовые технологии и высококачественные 
                материалы, чтобы воплотить в жизнь самые смелые дизайнерские решения. 
                Мы не просто изготавливаем изделия из камня - мы создаем произведения искусства 
                для вашего дома.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <GroupsIcon className="placeholder-icon" />
                <p>Наша команда профессионалов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="about-achievements">
          <h2 className="section-title center">Наши достижения</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2 className="section-title center">Наши ценности</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="about-process">
          <h2 className="section-title center">Как мы работаем</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Консультация</h3>
              <p className="step-description">
                Обсуждаем ваши потребности, предпочтения и бюджет. 
                Выезжаем на объект для замеров.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Дизайн</h3>
              <p className="step-description">
                Создаем 3D-проект будущего изделия с учетом всех 
                особенностей вашего интерьера.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Производство</h3>
              <p className="step-description">
                Изготавливаем изделие на современном оборудовании 
                с соблюдением всех технологических процессов.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Установка</h3>
              <p className="step-description">
                Профессионально устанавливаем изделие и проводим 
                финальную проверку качества.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-why-choose">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2 className="section-title">Почему выбирают нас</h2>
              <ul className="why-choose-list">
                <li>
                  <TrendingUpIcon className="list-icon" />
                  <span>15 лет успешной работы на рынке</span>
                </li>
                <li>
                  <VerifiedIcon className="list-icon" />
                  <span>Сертифицированные материалы от ведущих производителей</span>
                </li>
                <li>
                  <HandymanIcon className="list-icon" />
                  <span>Собственное производство с современным оборудованием</span>
                </li>
                <li>
                  <DiamondIcon className="list-icon" />
                  <span>Индивидуальный подход к каждому проекту</span>
                </li>
                <li>
                  <GroupsIcon className="list-icon" />
                  <span>Команда опытных дизайнеров и мастеров</span>
                </li>
                <li>
                  <PaletteIcon className="list-icon" />
                  <span>Широкий выбор цветов и текстур камня</span>
                </li>
              </ul>
            </div>
            <div className="why-choose-image">
              <div className="image-placeholder">
                <DiamondIcon className="placeholder-icon" />
                <p>Качество превыше всего</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
            <h2 className="cta-title">Готовы создать что-то уникальное?</h2>
            <p className="cta-description">
              Свяжитесь с нами сегодня, и мы поможем воплотить ваши идеи в реальность
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/+996778991499" 
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить консультацию
              </a>
              <a href="#collection" className="cta-button secondary">
                Посмотреть работы
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;