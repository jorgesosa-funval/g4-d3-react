import React, { useState } from 'react';
import equis from './icons/equis.png';
import menu from './icons/menu.png'
import { ListaNav } from './ListaNav';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='font-PrincipalFont w-[20%]'>
      {/* <button onClick={toggleNav} className='p-2 ml-5 mt-5 bg-[#2f2f31] text-white rounded-lg hover:bg-[#85868b] top-0'><img src={menu} alt="menu icon" /></button> */}
      <div className={`h-screen bg-primary-palet-400 w-full flex flex-col rounded-r-xl  `}>
       {/*  <button onClick={toggleNav} className='flex content-center w-full border-black border-2px '>
          <img src={equis} alt="icono equis" className='mx-2 my-2 w-7 h-7' /> <p className='relative top-3 uppercase underline text-center left-0 right-0 w-[70%] text-zinc-500'>Menú:</p>
        </button> */}
        <ListaNav/>
      </div>
    </div>
  );
}
