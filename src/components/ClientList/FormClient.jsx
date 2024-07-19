import React, { useState } from 'react'

export const FormClient = ({ clickFrom,data }) => {

const [clients, setClients] = useState([data])

    function closeForm(e) {
        e.preventDefault()
        const formClient = new FormData(e.target)
        const newClient = {
            id:(data.length+1),
            nombre: formClient.get('nombre'),
            apellido: formClient.get('apellido'),
            telefono: formClient.get('telefono'),
            dni: formClient.get('dni'),
            correo: formClient.get('correo'),
            direccion: formClient.get('direccion')

        }
       
        data.push(newClient);
        console.log(data);

        clickFrom()
    }
    return (
        <div className='bg-primary-palet-950 absolute bg-opacity-75 w-full  h-screen pl-32 z-10 right-0 top-0'>
            <form action="" className='flex flex-col gap-4 w-3/5 h-screen place-content-center mx-auto' onSubmit={closeForm} >
                <label className='text-white text-xl font-semibold' htmlFor="nombre">Nombre</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='nombre' name='nombre' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="apellido">Apellido</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='apellido' name='apellido' type="text" />
                <label className='text-white text-xl font-semibold' htmlFor="telefono">Telefono</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='telefono' name='telefono' type="number" />
                <label className='text-white text-xl font-semibold' htmlFor="dni">DNI</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='dni' name='dni' type="number" />
                <label className='text-white text-xl font-semibold' htmlFor="correo">Correo</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='correo' name='correo' type="email" />
                <label className='text-white text-xl font-semibold' htmlFor="direccion">Direccion</label>
                <input className='w-3/4 min-h-10 rounded-xl px-4 focus:outline-none focus:border focus:border-gray-600' id='direccion' name='direccion' type="text" />

                <button className='text-white text-xl font-semibold w-3/4 min-h-10 rounded-xl px-4 border mt-4 hover:bg-primary-palet-700' type='submit' >Add Client</button>

            </form>
        </div>
    )
}
