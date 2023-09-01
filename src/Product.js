import React from 'react';
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { image, name, description, price } = product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default Product;
