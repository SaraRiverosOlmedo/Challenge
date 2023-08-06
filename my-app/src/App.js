import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginProvider from './Context/LoginProvider';
import Login from './view/Login';
import Reset from './view/Reset';
import CartProvider from './Context/CartProvider';
import ServiciosSolicitados from './view/ServiciosSolicitados';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './view/Payment';
import FloatingButton from './Components/FloatingButton';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <LoginProvider>
          <CartProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ServiciosSolicitados" element={<ServiciosSolicitados />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/Payment/:total" element={<Payment />} />
          </Routes>
          </CartProvider>
          <FloatingButton />
          {/* <Footer /> */}
        </LoginProvider>
      </div>
    </Router>
  );
};

export default App;
