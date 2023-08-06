import React from 'react';
import { useCart } from '../Context/CartProvider';
// import TarjetaPago from './TarjetaPago';

const DetallePago = () => {
  const { cartItems, getTotal } = useCart();

  return (
    <div>
      <h1>Detalle de la compra</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.nombre}</span> - <span>${item.precio}</span>
          </li>
        ))}
      </ul>
      <p>Total a pagar: ${getTotal()}</p>
      <TarjetaPago />
    </div>
  );
};

export default DetallePago;
