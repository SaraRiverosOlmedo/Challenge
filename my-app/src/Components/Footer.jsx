import React from 'react';

const Footer = () => {
 
  return (
    <div className='footer'>
      <span>
        <a className="aStyle" href="https://lunapets.co/" target="_blank" rel="noopener noreferrer">
        lunapets.co
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;Derechos Reservados © {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
