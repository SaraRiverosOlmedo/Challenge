import React from 'react';
import TopNavbar from '../Navbar/TopNavbar';
import PendientesTable from "../Components/PagosPendientes";
import Pagados from'../Components/Pagados';
import Footer from '../Components/Footer';


const ServiciosSolicitados = () => {
  
  return (
    <div>
      <div className="mx-auto img-fluid" style={{ backgroundImage: 'url("https://i.ibb.co/bB84GQJ/pexels-gilberto-reyes-825949.jpg")', backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', height: '100vh', overflowY: 'auto' }}>
      <TopNavbar />
      <div>
        <PendientesTable />
        <Pagados/>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ServiciosSolicitados;
