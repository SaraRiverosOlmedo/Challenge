import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginProvider from './Context/LoginProvider';
import Register from './view/Register';
import Login from './view/Login';
import MenuCart from './view/MenuCart';
import Reset from './view/Reset';
import Productos from './view/Producto';
import CartProvider from './Context/CartProvider';
import Carrito from "./view/Carrito"

const App = () => {
  return (
    <Router>
      <div className="App">
        <LoginProvider>
          <CartProvider>
          <Routes>
            <Route path="/signin" element={<Register/>} />
            <Route path="/" element={<Login />} />
            <Route path="/MenuCart" element={<MenuCart/>} />
            <Route path="/productos" element= {<Productos/>} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
          </CartProvider>
        </LoginProvider>
      </div>
    </Router>
  );
};

export default App;
