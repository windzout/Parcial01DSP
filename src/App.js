import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import Total from './Total';
import data from './data'; 
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const adjustQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <h1>Jaguar Sportic</h1>
      <img src="https://media.licdn.com/dms/image/C4D0BAQHQhujasx-bJA/company-logo_200_200/0/1593613388909?e=2147483647&v=beta&t=TBlY4E1AYoTZb8xZrkMD2Negg_GlhEXxDx9RpHRuXTM"></img>
      <h4>Bienvenido a nuestra tienda oficial, donde podas encontrar diversos productos de deporte y más. #PasionPorElDeporte</h4>
      <div className="product-list">
        {data.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
      <Total cart={cart} />
    </div>
  );
};

export default App;