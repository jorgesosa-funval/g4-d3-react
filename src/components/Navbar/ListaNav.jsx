import React from 'react'
import { Link } from 'react-router-dom'

export const ListaNav = () => {
  return (
    <ul className='flex flex-col text-center py-3'>
        {
            ['Home', 'Productos', 'Clientes', 'Facturas', 'Ingresos', 'Egresos', 'Resumen'].map(item => 
                <li className='p-5 cursor-pointer hover:text-white' key={item}><Link to={`/${item.toLowerCase()}`}>{item}</Link></li>
            )
        }
    </ul>
  )
}
