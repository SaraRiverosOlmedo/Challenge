import React from 'react';
import { Link } from 'react-router-dom';



const FloatingButton = () => {
  return (
    <Link to="https://api.whatsapp.com/send?phone=56926969029">
      <button className="floating-button">  <i className="fab fa-whatsapp fa-fw"></i></button>
    </Link>
  );
};

export default FloatingButton;
