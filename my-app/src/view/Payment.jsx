// Payment.jsx
import React from 'react';
// import DetallePago from '../Components/DetallePago';
import TarjetaPago from '../Components/TarjetaPago';
import TopNavbar from '../Navbar/TopNavbar';

const Payment = () => {
  return (
    <div>
      <TopNavbar />
      {/* <DetallePago /> */}
      <TarjetaPago />
    </div>
  );
};

export default Payment;
