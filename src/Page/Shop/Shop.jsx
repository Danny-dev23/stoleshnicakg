import React, { useMemo, useState } from "react";
import products from "../../Assets/Product/Product";
import {
  Container,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Pagination,
  Typography,
  Slider,
} from "@mui/material";
import "./Shop.css";
import Card from "../../Components/Card/Card";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [priceRange, setPriceRange] = useState([0, 330]);
  // Получаем уникальные категории
  const categories = [...new Set(products.map((p) => p.category))];

  // Фильтрация
  const filteredProducts = products.filter((product) => {
    const productPrice = parseInt(product.price.replace("$", ""));
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchPrice =
      productPrice >= priceRange[0] && productPrice <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const { minProductPrice, maxProductPrice } = useMemo(() => {
    const prices = products.map((p) => parseInt(p.price.replace("$", "")));
    return {
      minProductPrice: Math.min(...prices),
      maxProductPrice: Math.max(...prices),
    };
  }, []);

  // Обработчик изменения диапазона цен
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setCurrentPage(1); // сбрасываем страницу при изменении фильтра
  };

  // Пагинация
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // прокрутка наверх
  };

  return (
    <div>
      <Container>
        <h1 className="card-head">АКРИЛОВЫЙ ИСКУССТВЕННЫЙ КАМЕНЬ - ПРЕИМУЩЕСТВА</h1>
        <p className="card-desc">
          Наш искусственный камень - это инновационный материал, который
          сочетает в себе прочность, элегантность и функциональность.
        </p>

        {/* Фильтры */}
        <div className="card-box">
          <div className="filters">
            <div className="filters-category">
              <div
                className="category-item"
                onClick={() => {
                  setSelectedCategory("");
                  setCurrentPage(1);
                }}
                style={{
                  color: selectedCategory === "" ? "#649d2a" : "inherit",
                }}
              >
                Все категории
              </div>
              {categories.map((cat, index) => (
                <div
                  key={cat}
                  className="category-item"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  style={{
                    color: selectedCategory === cat ? "#649d2a" : "inherit",
                  }}
                >
                  <p className="category-item__text">
                    {cat}{" "}
                    {(cat === "Supreme" ||
                      cat === "Metallic" ||
                      cat === "Sanded" ||
                      cat === "Pebble" ||
                      cat === "Quarry") && (
                      <span className="category-item__text-span">Хит</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="filters-price">
              <p className="filter-price__title">
                Фильтр по цене
              </p>
              <Typography gutterBottom>
                Цена: {priceRange[0]}$ - {priceRange[1]}$
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={minProductPrice}
                max={maxProductPrice}
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="card-list">
            <div className="card-list__items">
              <Card products={paginatedProducts} />
            </div>
            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </div>
            )}
          </div>
        </div>

        {/* Пагинация */}
      </Container>
    </div>
  );
};

export default Shop;

// useEffect(() => {
//   // Добавляем Google Tag Manager скрипт
//   const script = document.createElement("script");
//   script.async = true;
//   script.src = "https://www.googletagmanager.com/gtag/js?id=AW-974307140";
//   document.head.appendChild(script);

//   // Инициализация gtag
//   const gtagScript = document.createElement("script");
//   gtagScript.innerHTML = `
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
//     gtag('config', 'AW-974307140');
//   `;
//   document.head.appendChild(gtagScript);

//   // Очистка скриптов при размонтировании компонента
//   return () => {
//     document.head.removeChild(script);
//     document.head.removeChild(gtagScript);
//   };
// }, []);
