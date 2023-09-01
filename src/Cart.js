import React from 'react';

const Cart = ({ cart, removeFromCart, adjustQuantity }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={e => adjustQuantity(item.id, e.target.value)}
          />
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
