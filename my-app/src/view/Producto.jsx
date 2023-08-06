import React, { useState } from 'react';
import addToCart from './MenuCart';
import { useCart } from '../Context/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import TopNavbar from '../Navbar/TopNavbar';

const Carrito = () => {
    const { cartItems } = useCart();
  
    return (
      <div className="carrito">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <span>{cartItems.length}</span>
      </div>
    );
  };

const Productos = () => {

    const { addToCart } = useCart();

  const [productos] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
    // Agrega más productos si lo deseas
  ]);


  const handleAddToCart = (item) => {
   addToCart(item);
    console.log('Agregado al carrito:', item.name);
  };

  return (
    <div className="productos">
      <div>
     <TopNavbar />
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
    </div>
  );
};

export default Productos;
