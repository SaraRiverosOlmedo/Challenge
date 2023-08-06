import React from "react";
import serviciosDetalle from "../source/serviciosDetalle.json";

const filtrarPorEstado = (estado) => {
    return serviciosDetalle.products.filter((producto) => producto.Estado === estado);
  };

const PagadosTable = () => {

    const pagados = filtrarPorEstado("pagado");
    
  
    return (
      <div className="ContainerPagados">
        {/* <h2>Historial De Pagos</h2> */}
        <table className="tableStyle">
          <thead>
          <th className="trPendientes" colspan="4">
          Historial
          </th>
            <tr className='trbordertop'>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Servicio</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagados.map((producto) => (
              <tr key={producto.fecha}>
                <td>{producto.fecha}</td>
                <td>{producto.nombre}</td>
                <td>{producto.servicio}</td>
                <td>$ {producto.valor}</td>
                <td>{producto.Estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PagadosTable;
  