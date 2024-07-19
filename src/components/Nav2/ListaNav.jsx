import React from 'react'
import { Link } from 'react-router-dom'

export const ListaNav = () => {
  return (
    <ul className='flex flex-col text-center py-3 space-y-4'>
        {
            ['Productos', 'Clientes', 'Facturas', 'Ingresos', 'Egresos', 'Resumen'].map(item => 
                <li className='p-4 cursor-pointer rounded-lg hover:bg-primary-palet-900 text-primary-palet-200 transition-colors duration-300 ease-in-out hover:text-white text-lg' key={item}>
                    <Link to={`/home/${item.toLowerCase()}`} className='flex items-center justify-center space-x-2'>
                        <span>{item}</span>
                    </Link>
                </li>
            )
        }
    </ul>
  )
}