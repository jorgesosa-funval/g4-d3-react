import React from 'react'

export const EditClient = ({clickEditF}) => {


  return (
   
         <div className='bg-primary-palet-950 absolute bg-opacity-75 w-full h-screen pl-32 z-10  right-0 top-0'>
            <form action="" className='flex flex-col gap-4 w-3/5 h-screen place-content-center mx-auto'>
                <label className='text-white text-xl font-semibold' htmlFor="nombre">Nombre</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='nombre' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="apellido">Apellido</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='apellido' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="telefono">Telefono</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='telefono' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="dni">DNI</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='dni' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="correo">Correo</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='correo' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="direccion">Direccion</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='direccion' type="text" />

                <button className='text-white text-xl font-semibold w-3/4 min-h-10 rounded-xl px-4 border mt-4 hover:bg-primary-palet-700' type='submit' onClick={clickEditF} >Edit Client</button>

            </form>
        </div>
  
  )
}
