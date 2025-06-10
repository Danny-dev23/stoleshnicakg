import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo-stol2.png";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <Container>
          <div className="header">
            <Link to="/" className="block-logo">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <nav className={`main-nav hamburger-menu ${menuOpen ? 'open' : ''}`}>
              <input id="menu__toggle" type="checkbox" checked={menuOpen} onChange={toggleMenu} />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box">
                <li>
                  <Link to="/" className="menu__item" onClick={closeMenu}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="menu__item" onClick={closeMenu}>
                    Коллекции
                  </Link>
                </li>
                <li>
                  <Link to="/advantages" className="menu__item" onClick={closeMenu}>
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="menu__item" onClick={closeMenu}>
                    О нас
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="menu__item" onClick={closeMenu}>
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>

            <div className="block-btn">
              <a
                href="https://www.instagram.com/stoleshnica.kg_?igsh=NXhnMTBpcDhhd3V6"
                className="header-btn"
                target="_blank"
                rel="noreferrer"
              >
                Заказать
              </a>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;