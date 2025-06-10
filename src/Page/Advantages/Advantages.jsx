import React from "react";
import "./Advantages.css";
import { Container } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import StraightenIcon from "@mui/icons-material/Straighten";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SecurityIcon from '@mui/icons-material/Security';
import BuildIcon from '@mui/icons-material/Build';
import PaletteIcon from '@mui/icons-material/Palette';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const Advantages = () => {
  const mainAdvantages = [
    {
      icon: <DiamondIcon />,
      title: "Премиум материалы",
      description: "Работаем с сертифицированным камнем от ведущих мировых производителей",
      features: ["Сертификация ISO", "Европейские стандарты", "Проверенное качество"]
    },
    {
      icon: <StraightenIcon />,
      title: "3D-проектирование",
      description: "Создаем точный проект будущего изделия с учетом всех особенностей помещения",
      features: ["Точные замеры", "Визуализация", "Корректировки в реальном времени"]
    },
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Гарантия качества",
      description: "5 лет гарантии на все изделия из искусственного камня",
      features: ["Письменная гарантия", "Бесплатное обслуживание", "Замена при дефектах"]
    },
    {
      icon: <ScheduleIcon />,
      title: "Точные сроки",
      description: "Изготовление изделий любой сложности от 7 рабочих дней",
      features: ["Четкий график", "Контроль этапов", "Своевременная доставка"]
    }
  ];

  const materialAdvantages = [
    {
      icon: <SecurityIcon />,
      title: "Прочность и долговечность",
      description: "Искусственный камень превосходит натуральный по прочности и устойчивости к повреждениям",
      details: "Выдерживает нагрузки до 200 кг/м², устойчив к царапинам и сколам"
    },
    {
      icon: <WaterDropIcon />,
      title: "Водостойкость",
      description: "Непористая структура материала обеспечивает 100% защиту от влаги",
      details: "Не впитывает воду, не образует плесень, идеален для ванных комнат"
    },
    {
      icon: <LocalFireDepartmentIcon />,
      title: "Термостойкость",
      description: "Выдерживает температуры до 180°C без деформации и изменения цвета",
      details: "Можно ставить горячую посуду, устойчив к перепадам температур"
    },
    {
      icon: <CleaningServicesIcon />,
      title: "Легкость в уходе",
      description: "Гладкая поверхность легко очищается обычными моющими средствами",
      details: "Не требует специальных средств, устойчив к пятнам и загрязнениям"
    },
    {
      title: "Экологичность",
      description: "Безопасный состав без вредных веществ, подходит для пищевых продуктов",
      details: "Сертификат экологической безопасности, гипоаллергенный материал"
    },
    {
      icon: <AutoFixHighIcon />,
      title: "Ремонтопригодность",
      description: "Мелкие повреждения легко устраняются без замены всего изделия",
      details: "Шлифовка, полировка, локальный ремонт на месте установки"
    }
  ];

  const designAdvantages = [
    {
      icon: <PaletteIcon />,
      title: "Безграничные возможности дизайна",
      description: "Более 100 цветов и текстур, возможность создания уникальных оттенков"
    },
    {
      icon: <BuildIcon />,
      title: "Бесшовное соединение",
      description: "Создание монолитных конструкций любой формы и размера"
    },
    {
      icon: <DiamondIcon />,
      title: "Идеальная поверхность",
      description: "Гладкая, однородная текстура без пор и микротрещин"
    }
  ];

  const comparisonData = [
    {
      feature: "Прочность",
      artificial: "Высокая",
      natural: "Средняя",
      advantage: "artificial"
    },
    {
      feature: "Водостойкость",
      artificial: "100%",
      natural: "Требует обработки",
      advantage: "artificial"
    },
    {
      feature: "Уход",
      artificial: "Простой",
      natural: "Сложный",
      advantage: "artificial"
    },
    {
      feature: "Цветовая гамма",
      artificial: "100+ вариантов",
      natural: "Ограничена",
      advantage: "artificial"
    },
    {
      feature: "Стоимость",
      artificial: "Доступная",
      natural: "Высокая",
      advantage: "artificial"
    },
    {
      feature: "Экологичность",
      artificial: "Сертифицирован",
      natural: "Природный",
      advantage: "equal"
    }
  ];

  return (
    <div className="advantages">
      <Container>
        {/* Hero Section */}
        <section className="advantages-hero">
          <div className="hero-content">
            <h1 className="hero-title">Преимущества искусственного камня</h1>
            <p className="hero-subtitle">
              Почему более 1000 клиентов выбрали наши решения
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">лет опыта</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">довольных клиентов</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">гарантия качества</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Advantages */}
        <section className="main-advantages">
          <h2 className="section-title">Наши главные преимущества</h2>
          <div className="advantages-grid">
            {mainAdvantages.map((advantage, index) => (
              <div key={index} className="advantage-card main-card">
                <div className="card-header">
                  <div className="advantage-icon">
                    {advantage.icon}
                  </div>
                  <h3 className="advantage-title">{advantage.title}</h3>
                </div>
                <p className="advantage-description">{advantage.description}</p>
                <ul className="advantage-features">
                  {advantage.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Material Advantages */}
        <section className="material-advantages">
          <h2 className="section-title">Преимущества материала</h2>
          <div className="material-grid">
            {materialAdvantages.map((advantage, index) => (
              <div key={index} className="material-card">
                <div className="material-icon">
                  {advantage.icon}
                </div>
                <div className="material-content">
                  <h3 className="material-title">{advantage.title}</h3>
                  <p className="material-description">{advantage.description}</p>
                  <div className="material-details">{advantage.details}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Advantages */}
        <section className="design-advantages">
          <h2 className="section-title">Дизайнерские возможности</h2>
          <div className="design-grid">
            {designAdvantages.map((advantage, index) => (
              <div key={index} className="design-card">
                <div className="design-icon">
                  {advantage.icon}
                </div>
                <h3 className="design-title">{advantage.title}</h3>
                <p className="design-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="comparison-section">
          <h2 className="section-title">Сравнение с натуральным камнем</h2>
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Характеристика</div>
              <div className="header-cell artificial">Искусственный камень</div>
              <div className="header-cell natural">Натуральный камень</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className="table-row">
                <div className="cell feature-cell">{row.feature}</div>
                <div className={`cell artificial-cell ${row.advantage === 'artificial' ? 'winner' : ''}`}>
                  {row.artificial}
                  {row.advantage === 'artificial' && <CheckCircleOutlineIcon className="winner-icon" />}
                </div>
                <div className={`cell natural-cell ${row.advantage === 'natural' ? 'winner' : ''}`}>
                  {row.natural}
                  {row.advantage === 'natural' && <CheckCircleOutlineIcon className="winner-icon" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Advantages */}
        <section className="process-advantages">
          <h2 className="section-title">Преимущества нашего процесса</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Бесплатная консультация</h3>
                <p>Выезд специалиста, замеры, расчет стоимости</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>3D-проектирование</h3>
                <p>Визуализация проекта, согласование деталей</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Производство</h3>
                <p>Изготовление на современном оборудовании</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Установка</h3>
                <p>Профессиональный монтаж, гарантия качества</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="advantages-cta">
          <div className="cta-content">
            <h2 className="cta-title">Убедитесь в преимуществах сами</h2>
            <p className="cta-description">
              Закажите бесплатную консультацию и получите персональное предложение
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
              <a href="/shop" className="cta-button secondary">
                Посмотреть каталог
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Advantages;