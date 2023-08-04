// MenuCart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const MenuCart = () => {
  const [cartItems, setCartItems] = useState([]);

 
  const [user] = useAuthState(auth);

  // Función para cerrar sesión
  const handleSignOut = () => {
    auth.signOut();
  };

  // Función para agregar un ítem al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para eliminar un ítem del carrito
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="menu-cart">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        {user ? (
          <>
            <h3>Bienvenido, {user.displayName}</h3>
            <button onClick={handleSignOut}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
        <h3>Carrito de compra</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuCart;
