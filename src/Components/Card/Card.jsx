import React, { useState } from "react";
import CalculateModal from "../Modal/Modal";

const Card = ({products}) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };
  return (
    <div>
      <div className="container">
        <div className="product-card__box">
          {products.map((product) => (
            <div className="product-cards" key={product.id}>
              <div className="product-card__item">
                <div className="product-overlay">
                  <h2>{product.category}</h2>
                  <p className="product-color">{product.color}</p>
                  <span className="product-price">
                    От{" "}
                    <span className="product-price__color">
                      {product.price || "240$"}
                    </span>
                  </span>
                  <button onClick={() => handleOpen(product)}>
                    Рассчитать стоимость
                  </button>
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
      <CalculateModal 
        open={open} 
        handleClose={handleClose} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default Card;
