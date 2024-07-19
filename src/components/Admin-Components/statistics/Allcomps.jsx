import React from 'react';
import { Chart, registerables } from 'chart.js';
import ChartComponent from './ChartComponent';
import ChartComponente from './ChartComponente';
import Resumen from './Resumen';
import Header from './Header';
Chart.register(...registerables);


const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Ventas',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Allcomps = () => {
  return (
    <div className="flex flex-col md:flex-row w-[80%]  font-PrincipalFont" >
      {/* <Sidebar /> */}
      <div className="w-full">
        <Header />
        <Resumen />
        <ChartComponent data={data} options={options} />
        <ChartComponente/>
      </div>
    </div>
  );
};

export default Allcomps;
