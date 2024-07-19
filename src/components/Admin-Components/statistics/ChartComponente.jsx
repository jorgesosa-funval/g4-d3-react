// src/components/Chart.jsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponente = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Función para destruir el gráfico si ya existe
    const destroyChart = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

    // Crear el gráfico
    const createChart = () => {
      destroyChart();
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'bar', // Cambia esto al tipo de gráfico que estés utilizando
        data: data,
        options: options,
      });
    };

    createChart();

    // Destruir el gráfico al desmontar el componente o cuando los datos u opciones cambien
    return destroyChart;
  }, [data, options]);

  return <canvas className='h-[300px]' ref={chartRef} id="myChart" />;
};

export default ChartComponente;
