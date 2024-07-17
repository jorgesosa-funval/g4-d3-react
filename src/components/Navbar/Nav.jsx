import React, { useState } from 'react';
import equis from './icons/equis.png';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-PrincipalFont'>
      <button onClick={toggleNav} className='p-2 ml-5 mt-5 bg-[#2f2f31] text-white rounded-lg hover:bg-[#85868b] absolute top-0'>Open Nav</button>
      <div className={`fixed top-0 left-0 h-screen bg-[#2f2f31] w-[20%] flex flex-col rounded-r-xl transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleNav} className='flex content-center w-full border-black border-2px '>
          <img src={equis} alt="icono equis" className='mx-2 my-2 w-7 h-7' /> <p className='relative top-3 uppercase underline text-center left-0 right-0 w-[70%] text-zinc-500'>Menú:</p>
        </button>
        <ul className='flex flex-col text-center py-3'>
          <li className='p-5 cursor-pointer hover:text-white'>Home</li>
          <li className='p-5 cursor-pointer hover:text-white'>Productos</li>
          <li className='p-5 cursor-pointer hover:text-white'>Clientes</li>
          <li className='p-5 cursor-pointer hover:text-white'>Facturas</li>
          <li className='p-5 cursor-pointer hover:text-white'>Ingresos</li>
          <li className='p-5 cursor-pointer hover:text-white'>Egresos</li>
          <li className='p-5 cursor-pointer hover:text-white'>Resumen</li>
        </ul>
      </div>
    </div>
  );
}
