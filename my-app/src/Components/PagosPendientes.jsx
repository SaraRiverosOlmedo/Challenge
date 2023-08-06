import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import serviciosDetalle from '../source/serviciosDetalle.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetaPago from './TarjetaPago';


const filtrarPorEstado = (estado) => {
  return serviciosDetalle.products.filter((producto) => producto.Estado === estado);
};

const PendientesTable = () => {

   const navigate = useNavigate();
  const data = serviciosDetalle.products;
  console.log(data);

  const pendientes = filtrarPorEstado('pendiente');
  const [pendientesSeleccionados, setPendientesSeleccionados] = useState([]);
  const [sumaPendientes, setSumaPendientes] = useState(0);

  const agregarPendiente = (pendiente) => {
    setPendientesSeleccionados([...pendientesSeleccionados, pendiente]);
    setSumaPendientes(sumaPendientes + pendiente.valor);
  };

  const eliminarPendiente = (pendiente) => {
    const nuevosPendientes = pendientesSeleccionados.filter((item) => item.fecha !== pendiente.fecha);
    setPendientesSeleccionados(nuevosPendientes);
    setSumaPendientes(sumaPendientes - pendiente.valor);
  };

  const handlePagarClick = () => {
    if (pendientesSeleccionados.length === 0) {
      alert('Debe seleccionar al menos un servicio a pagar');
      return;
    } else {
    navigate(`/Payment/${sumaPendientes}`);
    }
  };

  return (
    <div className='ContainerPendientes'>
      <table className="table-responsive tableStyle">
        <thead>
          <th className="trPendientes" colspan="5">
            Pendientes
          </th>
          <tr className='trbordertop' >
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Servicio</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {pendientes.map((producto) => (
            <tr key={producto.nombre}>
              <td>{producto.fecha}</td>
              <td>{producto.nombre}</td>
              <td>{producto.servicio}</td>
              <td>$ {producto.valor}</td>
              <td>
                {pendientesSeleccionados.find((item) => item.fecha === producto.fecha) ? (
                  <button className='btnAgregar' onClick={() => eliminarPendiente(producto)}>Deshacer</button>
                ) : (
                  <button className='btnDeshacer' onClick={() => agregarPendiente(producto)}>Agregar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <h3>Total a Pagar: {sumaPendientes}</h3>
      </div> */}
      {pendientesSeleccionados.length > 0 && <TarjetaPago totalPagar={sumaPendientes} />}
      {/* {pendientesSeleccionados.length > 0 ? (
          <Link to={`/Payment/${sumaPendientes}`}>
          <button className='btnPagar'>Proceder al Pago</button>
        </Link>
      ) : (
        <button className='btnPagar' onClick={() => alert('Debe seleccionar al menos un servicio a pagar')}>
          Proceder al Pago
        </button>
      )} */}
    </div>
  );
};

export default PendientesTable;
