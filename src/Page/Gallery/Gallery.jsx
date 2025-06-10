import React from "react";
import "./gallery.css";
import products from "../../Assets/Product/Product";

const Gallery = () => {
  const uniqueProducts = Array.from(
    new Set(products.map((item) => item.category))
  )
    .slice(0, 8)
    .map((category) =>
      products.find((product) => product.category === category)
    );

  return (
    <div className="gallery">
      <h1 className="gallery__head">Популярные цвета камня</h1>
      <p className="gallery__description">
        Исследуйте наш широкий ассортимент цветов искусственного камня для вашего идеального интерьера. 
        От классических светлых оттенков до насыщенных темных тонов - каждый найдет именно то, 
        что ищет. Наши материалы сочетают в себе непревзойденное качество, долговечность и 
        эстетическую привлекательность, что делает их идеальным выбором для кухонных столешниц, 
        подоконников и других элементов интерьера.
      </p>
      <div className="container">
        <div className="product-box">
          {uniqueProducts.map((product) => (
            <div className="product-cards" key={product.id}>
              <div className="product-card__item">
                <div className="product-overlay">
                  <h2>{product.category}</h2>
                  <p className="product-color">{product.color}</p>
                  <span className="product-price">
                    От <span className="product-price__color">{product.price || "240$"}</span>
                    
                  </span>
                </div>
                <img
                  src={product.image}
                  alt={product.color}
                  className="product-image__card"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
