import React from 'react'
import { ListaNav } from './ListaNav'
import menu from './icons/menu.png'
import confi from './icons/ajustes.png'

export const Navbar = () => {
  return (
    <nav className='w-[20%] h-screen bg-primary-palet-900 bg-opacity-90 border border-primary-palet-800 rounded-r-2xl flex flex-col font-PrincipalFont shadow-md'>
        <div className='flex items-center py-4 px-6 bg-primary-palet-950 bg-opacity-70 border-b border-primary-palet-800 rounded-r-2xl'>
            <img src={menu} alt="menu icon" className='w-8' />
            <h1 className='text-2xl font-semibold ml-4 text-primary-palet-200'>Ronny's Corporate</h1>
        </div>
        <div className='flex-grow flex items-center justify-center'>
            <ListaNav />
        </div>
        <div className='py-4 bg-primary-palet-950 bg-opacity-70 border-t border-primary-palet-800 rounded-r-2xl flex items-center justify-center'>
            <img src={confi} alt="settings icon" className='w-5 h-5 mr-2' />
            <span className='text-primary-palet-200 font-medium'>Smile</span>
        </div>
    </nav>
  )
}