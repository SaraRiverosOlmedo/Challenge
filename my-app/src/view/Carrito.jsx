import React, { useState } from 'react';
import { useCart } from '../Context/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus, faUndo } from '@fortawesome/free-solid-svg-icons';

const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="carrito">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <span>{cartItems.length}</span>

      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => handleRemoveFromCart(item)}><FontAwesomeIcon icon={faMinus} /></button>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <>
          <button onClick={handleClearCart}>Deshacer pedido</button>
          <button>Sumar</button>
          <button>Restar</button>
        </>
      )}
    </div>
  );
};

const Productos = () => {
  const { addToCart } = useCart();

  const [productos] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
  ]);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log('Agregado al carrito:', item.name);
  };

  return (
    <div className="productos">
      <h2>Productos Disponibles</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <span>{producto.name}</span>
            <span>${producto.price}</span>
            <button onClick={() => handleAddToCart(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      <Carrito />
    </div>
  );
};

export default Productos;

