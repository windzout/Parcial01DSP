import React from 'react';

const Total = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="total">
      <h2>Total a Pagar</h2>
      <p>${total}</p>
    </div>
  );
};

export default Total;
