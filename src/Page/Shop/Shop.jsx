import React, { useMemo, useState } from "react";
import { staron, grandex } from "../../Assets/Product/Product";
import {
  Container,
  Pagination,
  Typography,
  Slider,
} from "@mui/material";
import "./Shop.css";
import Card from "../../Components/Card/Card";

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [priceRange, setPriceRange] = useState([0, 330]);
  
  // Mobile filter states
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileBrandSectionOpen, setMobileBrandSectionOpen] = useState(false);
  const [mobileCategorySectionOpen, setMobileCategorySectionOpen] = useState(false);
  const [mobilePriceSectionOpen, setMobilePriceSectionOpen] = useState(false);

  // Получаем текущий массив продуктов в зависимости от выбранного бренда
  const getCurrentProducts = () => {
    if (selectedBrand === "staron") return staron;
    if (selectedBrand === "grandex") return grandex;
    return [...staron, ...grandex];
  };

  const currentProducts = getCurrentProducts();

  // Получаем уникальные категории для текущего бренда
  const categories = [...new Set(currentProducts.map((p) => p.category))];

  // Фильтрация
  const filteredProducts = currentProducts.filter((product) => {
    const productPrice = parseInt(product.price.replace("$", ""));
    const matchCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchPrice =
      productPrice >= priceRange[0] && productPrice <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const { minProductPrice, maxProductPrice } = useMemo(() => {
    const prices = currentProducts.map((p) => parseInt(p.price.replace("$", "")));
    return {
      minProductPrice: Math.min(...prices),
      maxProductPrice: Math.max(...prices),
    };
  }, [currentProducts]);

  // Обработчик изменения диапазона цен
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setCurrentPage(1);
  };

  // Обработчик изменения бренда
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory("");
    setCurrentPage(1);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Функция для получения названия бренда
  const getBrandDisplayName = (brand) => {
    if (brand === "staron") return "Staron";
    if (brand === "grandex") return "Grandex";
    return "Все категории";
  };

  return (
    <div>
      <Container>
        <h1 className="card-head">АКРИЛОВЫЙ ИСКУССТВЕННЫЙ КАМЕНЬ - ПРЕИМУЩЕСТВА</h1>
        <p className="card-desc">
          Наш искусственный камень - это инновационный материал, который
          сочетает в себе прочность, элегантность и функциональность.
        </p>

        {/* Mobile Filters */}
        <div className="mobile-filters">
          <button 
            className={`mobile-filter-toggle ${mobileFiltersOpen ? 'active' : ''}`}
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            Фильтры и сортировка
          </button>
          
          <div className={`mobile-filters-content ${mobileFiltersOpen ? 'active' : ''}`}>
            {/* Results Count */}
            <div className="filter-results-count">
              Найдено товаров: {filteredProducts.length}
            </div>

            {/* Brand Filter */}
            <div className="mobile-filter-section">
              <button 
                className={`mobile-filter-header ${mobileBrandSectionOpen ? 'active' : ''}`}
                onClick={() => setMobileBrandSectionOpen(!mobileBrandSectionOpen)}
              >
                Бренды
              </button>
              <div className={`mobile-filter-body ${mobileBrandSectionOpen ? 'active' : ''}`}>
                <div className="mobile-category-grid">
                  <div
                    className={`mobile-category-item ${selectedBrand === "" ? 'active' : ''}`}
                    onClick={() => handleBrandChange("")}
                  >
                    Все категории
                  </div>
                  <div
                    className={`mobile-category-item ${selectedBrand === "staron" ? 'active' : ''}`}
                    onClick={() => handleBrandChange("staron")}
                  >
                    Staron
                    <span className="category-item__text-span">Премиум</span>
                  </div>
                  <div
                    className={`mobile-category-item ${selectedBrand === "grandex" ? 'active' : ''}`}
                    onClick={() => handleBrandChange("grandex")}
                  >
                    Grandex
                    <span className="category-item__text-span">Элит</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            {selectedBrand && (
              <div className="mobile-filter-section">
                <button 
                  className={`mobile-filter-header ${mobileCategorySectionOpen ? 'active' : ''}`}
                  onClick={() => setMobileCategorySectionOpen(!mobileCategorySectionOpen)}
                >
                  Подкатегории {getBrandDisplayName(selectedBrand)}
                </button>
                <div className={`mobile-filter-body ${mobileCategorySectionOpen ? 'active' : ''}`}>
                  <div className="mobile-category-grid">
                    <div
                      className={`mobile-category-item ${selectedCategory === "" ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory("");
                        setCurrentPage(1);
                      }}
                    >
                      Все подкатегории
                    </div>
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        className={`mobile-category-item ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCurrentPage(1);
                        }}
                      >
                        {cat}
                        {(cat === "Supreme" ||
                          cat === "Metallic" ||
                          cat === "Sanded" ||
                          cat === "Pebble" ||
                          cat === "Quarry" ||
                          cat === "Tempest") && (
                          <span className="category-item__text-span">Хит</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Price Filter */}
            <div className="mobile-filter-section">
              <button 
                className={`mobile-filter-header ${mobilePriceSectionOpen ? 'active' : ''}`}
                onClick={() => setMobilePriceSectionOpen(!mobilePriceSectionOpen)}
              >
                Фильтр по цене
              </button>
              <div className={`mobile-filter-body ${mobilePriceSectionOpen ? 'active' : ''}`}>
                <div className="mobile-price-display">
                  Цена: {priceRange[0]}$ - {priceRange[1]}$
                </div>
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
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="card-box">
          <div className="filters">
            {/* Фильтр по брендам */}
            <div className="filters-category">
              <h3 style={{ marginBottom: "15px", color: "#474a50" }}>Бренды</h3>
              <div
                className="category-item"
                onClick={() => handleBrandChange("")}
                style={{
                  color: selectedBrand === "" ? "#649d2a" : "inherit",
                  fontWeight: selectedBrand === "" ? "bold" : "normal",
                }}
              >
                <p className="category-item__text">Все категории</p>
              </div>
              <div
                className="category-item"
                onClick={() => handleBrandChange("staron")}
                style={{
                  color: selectedBrand === "staron" ? "#649d2a" : "inherit",
                  fontWeight: selectedBrand === "staron" ? "bold" : "normal",
                }}
              >
                <p className="category-item__text">
                  Staron
                  <span className="category-item__text-span">Премиум</span>
                </p>
              </div>
              <div
                className="category-item"
                onClick={() => handleBrandChange("grandex")}
                style={{
                  color: selectedBrand === "grandex" ? "#649d2a" : "inherit",
                  fontWeight: selectedBrand === "grandex" ? "bold" : "normal",
                }}
              >
                <p className="category-item__text">
                  Grandex
                  <span className="category-item__text-span">Элит</span>
                </p>
              </div>
            </div>

            {/* Фильтр по подкатегориям */}
            {selectedBrand && (
              <div className="filters-category" style={{ marginTop: "20px" }}>
                <h3 style={{ marginBottom: "15px", color: "#474a50" }}>
                  Подкатегории {getBrandDisplayName(selectedBrand)}
                </h3>
                <div
                  className="category-item"
                  onClick={() => {
                    setSelectedCategory("");
                    setCurrentPage(1);
                  }}
                  style={{
                    color: selectedCategory === "" ? "#649d2a" : "inherit",
                    fontWeight: selectedCategory === "" ? "bold" : "normal",
                  }}
                >
                  <p className="category-item__text">Все подкатегории</p>
                </div>
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="category-item"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    style={{
                      color: selectedCategory === cat ? "#649d2a" : "inherit",
                      fontWeight: selectedCategory === cat ? "bold" : "normal",
                    }}
                  >
                    <p className="category-item__text">
                      {cat}{" "}
                      {(cat === "Supreme" ||
                        cat === "Metallic" ||
                        cat === "Sanded" ||
                        cat === "Pebble" ||
                        cat === "Quarry" ||
                        cat === "Tempest") && (
                        <span className="category-item__text-span">Хит</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Фильтр по цене */}
            <div className="filters-price">
              <p className="filter-price__title">Фильтр по цене</p>
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
      </Container>
    </div>
  );
};

export default Shop;