import React from "react";
import whatsappIcon from "../../Assets/Images/whatsapp.png";
import instagramIcon from "../../Assets/Images/instagram1.png";
import "./Footer.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Logo from "../../Assets/Images/logo-stol2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src={Logo} alt="Stoleshnica.kg" className="logo-footer" />
              <h3 className="company-name">Stoleshnica.kg</h3>
            </div>
            <p className="company-description">
              Лидер в сфере дизайна и производства уникальных изделий из искусственного камня. 
              15 лет опыта, качество и индивидуальный подход к каждому клиенту.
            </p>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/stoleshnica.kg_?igsh=NXhnMTBpcDhhd3V6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a 
                href="https://wa.me/+996778991499" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-title">Быстрые ссылки</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-link">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  О нас
                </Link>
              </li>
              <li>
                <a href="#premium" className="footer-link">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-title">Наши услуги</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-link">Кухонные столешницы</span>
              </li>
              <li>
                <span className="footer-link">Раковины из камня</span>
              </li>
              <li>
                <span className="footer-link">Подоконники</span>
              </li>
              <li>
                <span className="footer-link">Барные стойки</span>
              </li>
              <li>
                <span className="footer-link">3D-проектирование</span>
              </li>
              <li>
                <span className="footer-link">Установка и монтаж</span>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h4 className="footer-title">Контактная информация</h4>
            <div className="contact-items">
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <div className="contact-details">
                  <a href="https://wa.me/+996778991499" target="_blank" rel="noopener noreferrer">
                    +996 778 991 499
                  </a>
                  <span className="contact-label">СК Monolit</span>
                </div>
              </div>
              
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <div className="contact-details">
                  <a href="https://wa.me/+996777991499" target="_blank" rel="noopener noreferrer">
                    +996 777 991 499
                  </a>
                  <span className="contact-label">ТЦ МегаКомфорт</span>
                </div>
              </div>

              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <div className="contact-details">
                  <a 
                    href="https://www.google.com/maps/place/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%22MONOLIT%22/@42.8655329,74.631117,18.27z/data=!4m6!3m5!1s0x389eb7c2cefd4f1d:0xce21dec84fef0912!8m2!3d42.8655146!4d74.6316187!16s%2Fg%2F11fp8z6q3f?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    СК Monolit, 2-этаж, бутик А-5
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <div className="contact-details">
                  <a 
                    href="https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B3%D0%B0+%D0%9A%D0%BE%D0%BC%D1%84%D0%BE%D1%80%D1%82/@42.8684675,74.6136241,16.93z/data=!4m6!3m5!1s0x389eb71adccea471:0xbab40f310d469a6d!8m2!3d42.8700448!4d74.6152763!16s%2Fg%2F11pw3116kv?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ТЦ МегаКомфорт, 4-этаж, офис-6
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <AccessTimeIcon className="contact-icon" />
                <div className="contact-details">
                  <span>Пн-Сб: 9:00 - 18:00</span>
                  <span className="contact-label">Вс: выходной</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map">
          <iframe
            className="iframe-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.1940964891218!2d74.63119866189325!3d42.865642725654595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c2cefd4f1d%3A0xce21dec84fef0912!2z0KHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INC60L7QvNC_0LvQtdC60YEgIk1PTk9MSVQi!5e0!3m2!1sru!2skg!4v1709448265900!5m2!1sru!2skg"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Наше местоположение"
          ></iframe>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Stoleshnica.kg. Все права защищены.</p>
            </div>
            <div className="footer-bottom-links">
              <span className="footer-link">Политика конфиденциальности</span>
              <span className="footer-link">Условия использования</span>
              <span className="footer-link">Гарантия</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;