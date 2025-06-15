import React from "react";
import "./Company.css";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ReviewOne from "../../Assets/Images/gallery/reviewOne.png";
import ReviewTwo from "../../Assets/Images/gallery/reviewTwo.png";
import ReviewThree from "../../Assets/Images/gallery/reviewThree.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Company = () => {
  const reviews = [
    {
      id: 1,
      name: "Виктория Петрова",
      position: "Директор ресторана",
      rating: 5,
      image: ReviewOne,
      text: "Заказывали столешницы для нашего ресторана. Качество превзошло все ожидания! Материал выглядит роскошно, легко чистится и выдерживает интенсивную эксплуатацию. Команда работала профессионально, соблюдая все сроки. Рекомендую всем!",
      project: "Столешницы для ресторана",
      date: "Декабрь 2023"
    },
    {
      id: 2,
      name: "Алтынай Жумабекова",
      position: "Руководитель дизайн-студии",
      rating: 5,
      image: ReviewTwo,
      text: "Сотрудничаем с этой компанией уже несколько лет. Всегда безупречное качество и креативный подход к каждому проекту. Особенно впечатляет их способность воплощать самые сложные дизайнерские идеи в реальность. Клиенты всегда довольны результатом!",
      project: "Дизайнерские столешницы",
      date: "Январь 2024"
    },
    {
      id: 3,
      name: "Артем Николаев",
      position: "Архитектор",
      rating: 5,
      image: ReviewThree,
      text: "Работали над проектом элитного жилого комплекса. Компания показала высочайший уровень профессионализма - от консультации до финальной установки. Качество материалов и точность исполнения на высшем уровне. Обязательно будем сотрудничать в будущих проектах!",
      project: "Элитный жилой комплекс",
      date: "Ноябрь 2023"
    },
    {
      id: 4,
      name: "Марина Козлова",
      position: "Владелец кафе",
      rating: 5,
      image: ReviewOne,
      text: "Заказывали барную стойку и столешницы для нашего кафе. Результат превзошел все ожидания! Стильно, практично и очень качественно. Гости постоянно восхищаются дизайном. Спасибо за профессиональную работу и индивидуальный подход!",
      project: "Барная стойка для кафе",
      date: "Октябрь 2023"
    },
    {
      id: 5,
      name: "Дмитрий Смирнов",
      position: "Частный клиент",
      rating: 5,
      image: ReviewThree,
      text: "Делали кухню в новой квартире. От первой консультации до установки - все на высшем уровне! Помогли выбрать идеальный цвет и текстуру камня, сделали точные замеры, изготовили и установили в срок. Кухня выглядит потрясающе! Всем рекомендую!",
      project: "Кухонная столешница",
      date: "Сентябрь 2023"
    }
  ];

  return (
    <section className="company" id="about">
      <Container>
        <div className="company-content">
          <div className="company-header">
            <h2 className="company-head">Отзывы наших клиентов</h2>
            <p className="company-subtitle">
              Более 1000 довольных клиентов доверили нам создание своих проектов
            </p>
          </div>

          <div className="reviews-slider-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true
              }}
              loop={true}
              className="reviews-swiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="review-slide">
                    <div className="review-content">
                      <div className="review-header">
                        <div className="quote-icon">
                          <FormatQuoteIcon />
                        </div>
                        <div className="review-rating">
                          {[...Array(review.rating)].map((_, index) => (
                            <StarIcon key={index} className="star-icon" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="review-text">
                        <p>"{review.text}"</p>
                      </div>
                      
                      <div className="review-footer">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            {review.image ? (
                              <img src={review.image} alt={review.name} />
                            ) : (
                              <PersonIcon className="avatar-icon" />
                            )}
                          </div>
                          <div className="reviewer-details">
                            <h4 className="reviewer-name">{review.name}</h4>
                            <p className="reviewer-position">{review.position}</p>
                            <div className="project-info">
                              <span className="project-name">{review.project}</span>
                              <span className="project-date">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-navigation">
              <button className="swiper-button-prev-custom">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="swiper-button-next-custom">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="company-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Довольных клиентов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Лет опыта</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Завершенных проектов</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Гарантия качества</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Company;