import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TarjetaPago = ({ totalPagar }) => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvv, setCvv] = useState('');

  
  const enmascararNumero = (numero) => {
    if (numero.length >= 4) {
      const numerosEnmascarados = '•'.repeat(numero.length - 4) + numero.slice(-4);
      return numerosEnmascarados;
    } else {
      return numero;
    }
  };

  return (
    <div className="tarjeta-pago">
      <h2>Total a Pagar: ${totalPagar}</h2>
      <div className="form-group">
        <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
        <input
          type="text"
          id="numeroTarjeta"
          className="form-control"
          placeholder="Ingresa el número de tarjeta"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombreTitular">Nombre del Titular:</label>
        <input
          type="text"
          id="nombreTitular"
          className="form-control"
          placeholder="Nombre del titular de la tarjeta"
          value={nombreTitular}
          onChange={(e) => setNombreTitular(e.target.value)}
        />
      </div>
      <div className="form-row detallesStyle">
        <div className="form-group col-md-6">
          <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
          <input
            type="text"
            id="fechaVencimiento"
            className="form-control"
            placeholder="MM/AA"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            className="form-control"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
      <div className="tarjeta-enmascarada">
        <p>{enmascararNumero(numeroTarjeta)}</p>
      </div>
      <button className='btnPagar'>Pagar</button>
    </div>
  );
};

export default TarjetaPago;
