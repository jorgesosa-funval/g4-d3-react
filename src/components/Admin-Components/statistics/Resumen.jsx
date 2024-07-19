import React, { useEffect, useState } from 'react';

const Resumen = () => {
  const [ingresos, setIngresos] = useState({});
  const [egresos, setEgresos] = useState({});

  useEffect(() => {
    setIngresos({
      ventaProductos: (Math.random() * 10000).toFixed(2),
      serviciosPrestados: (Math.random() * 10000).toFixed(2),
      alquilerEspacios: (Math.random() * 10000).toFixed(2)
    });

    setEgresos({
      materiaPrima: (Math.random() * 5000).toFixed(2),
      salarios: (Math.random() * 5000).toFixed(2),
      alquilerLocal: (Math.random() * 5000).toFixed(2)
    });
  }, []);

  return (
    <div className="bg-white p-10 max-h-[200px] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">Ingresos</h3>
          <p>Venta de productos: ${ingresos.ventaProductos}</p>
          <p>Servicios prestados: ${ingresos.serviciosPrestados}</p>
          <p>Alquiler de espacios: ${ingresos.alquilerEspacios}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Egresos</h3>
          <p>Compra de materia prima: ${egresos.materiaPrima}</p>
          <p>Salarios: ${egresos.salarios}</p>
          <p>Alquiler de local: ${egresos.alquilerLocal}</p>
        </div>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Resumen;
