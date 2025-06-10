import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./Slider.css"; // создайте файл Slider.css для стилей слайдера
import arrow from "../../Assets/Images/arrow.png";
import ImgSliderOne from "../../Assets/Images/gallery/slider-six.png";
import ImgSliderTwo from "../../Assets/Images/gallery/slider-seven.png";
import ImgSliderThree from "../../Assets/Images/gallery/slider-four.png";

const Slider = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="main">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false} // Отключаем стандартные кнопки навигации Swiper
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slider__img">
              <img src={ImgSliderOne} alt="" className="slider-img" />
            </div>
            <div className="swiper-slider__text">
              <h1 className="slider-text">
                Изготовление кухон - <br />
                <span className="span-slide">Искусство в деталях</span>
              </h1>
              <ul className="slider-description">
                <li className="slider-description__list">
                  Монолитное исполнение без швов
                </li>
                <li className="slider-description__list">
                  Встроенная LED-подсветка
                </li>
                <li className="slider-description__list">
                  Индивидуальный дизайн под ваш интерьер
                </li>
                <li className="slider-description__list">
                  Различные формы и размеры
                </li>
                <li className="slider-description__list">
                  Долговечность и практичность
                </li>
              </ul>
              <div className="swiper-slider__price">
                <p className="swiper-slider__price-text">
                  От <span className="span-slide">210$</span> за погонный метр
                </p>
                <button className="swiper-slider__btn">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slider__text">
              <h1 className="slider-text">
                Изготовление кухон - <br />
                <span className="span-slide">Искусство в деталях</span>
              </h1>
              <ul className="slider-description">
                <li className="slider-description__list">
                  Монолитное исполнение без швов
                </li>
                <li className="slider-description__list">
                  Встроенная LED-подсветка
                </li>
                <li className="slider-description__list">
                  Индивидуальный дизайн под ваш интерьер
                </li>
                <li className="slider-description__list">
                  Различные формы и размеры
                </li>
                <li className="slider-description__list">
                  Долговечность и практичность
                </li>
              </ul>
              <div className="swiper-slider__price">
                <p className="swiper-slider__price-text">
                  От <span className="span-slide">60$</span> за погонный метр
                </p>
                <button className="swiper-slider__btn">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
            <div className="swiper-slider__img">
              <img src={ImgSliderTwo} alt="" className="slider-img" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide">
            <div className="swiper-slider__img">
              <img src={ImgSliderThree} alt="" className="slider-img" />
            </div>
            <div className="swiper-slider__text">
              <h1 className="slider-text">
                Изготовление кухон - <br />
                <span className="span-slide">Искусство в деталях</span>
              </h1>
              <ul className="slider-description">
                <li className="slider-description__list">
                  Монолитное исполнение без швов
                </li>
                <li className="slider-description__list">
                  Встроенная LED-подсветка
                </li>
                <li className="slider-description__list">
                  Индивидуальный дизайн под ваш интерьер
                </li>
                <li className="slider-description__list">
                  Различные формы и размеры
                </li>
                <li className="slider-description__list">
                  Долговечность и практичность
                </li>
              </ul>
              <div className="swiper-slider__price">
                <p className="swiper-slider__price-text">
                  От <span className="span-slide">60$</span> за погонный метр
                </p>
                <button className="swiper-slider__btn">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="custom-controls">
        <button className="btn-next" onClick={goPrev}>
          <img src={arrow} alt="" />
        </button>
        <button className="btn-prev" onClick={goNext}>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
