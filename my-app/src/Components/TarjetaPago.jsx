import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useCart } from '../Context/CartProvider';

const TarjetaPago = ({ total }) => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [pagoExitoso, setPagoExitoso] = useState(false);

  const { cartItems } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      setPagoExitoso(true);
    } catch (error) {
      console.error('Error al simular el pago:', error);
    }
  };

  return (
    <div>
      <h1>Ingrese los detalles de su tarjeta de pago</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="numeroTarjeta">
          <Form.Label>Número de Tarjeta</Form.Label>
          <Form.Control
            type="text"
            value={numeroTarjeta}
            onChange={(e) => setNumeroTarjeta(e.target.value)}
            placeholder="Ingrese el número de tarjeta"
          />
        </Form.Group>

        <Form.Group controlId="fechaVencimiento">
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control
            type="text"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
            placeholder="MM/AA"
          />
        </Form.Group>

        <Form.Group controlId="codigoSeguridad">
          <Form.Label>Código de Seguridad</Form.Label>
          <Form.Control
            type="text"
            value={codigoSeguridad}
            onChange={(e) => setCodigoSeguridad(e.target.value)}
            placeholder="CVC"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Pagar
        </Button>
      </Form>

      {pagoExitoso && (
        <Alert variant="success" className="mt-3">
          El pago se ha realizado exitosamente.
        </Alert>
      )}

      <div>
        <h1>Detalle de la compra</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.nombre}</span> - <span>${item.precio}</span>
            </li>
          ))}
        </ul>
        <p>Total a pagar: ${total}</p>
      </div>
    </div>
  );
};

export default TarjetaPago;
