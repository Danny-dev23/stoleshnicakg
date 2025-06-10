import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Preview from "../Preview/Preview";
import Company from "../Company/Company";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  useEffect(() => {
    // Добавляем Google Tag Manager скрипт
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-974307140";
    document.head.appendChild(script);

    // Инициализация gtag
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-974307140');
        `;
    document.head.appendChild(gtagScript);

    // Очистка скриптов при размонтировании компонента
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(gtagScript);
    };
  }, []);
  return (
    <div>
      <Slider />
      <About />
      <Preview />
      <Gallery />
      <Company />
    </div>
  );
};

export default Home;
