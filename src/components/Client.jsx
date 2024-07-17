import React, { useEffect, useState } from 'react'
import { FormClient } from './FormClient'
import { EditClient } from './EditClient'

const client = [
    {
        "id": 1,
        "Nombre": "Jorge",
        "Apellido": "Sosa",
        "Telefono": "9555454454",
        "DNI": "121521",
        "Correo": "jorge@sosa.com",
        "Direccion": "St. Zoom"
    },
    {
        "id": 2,
        "Nombre": "Maria",
        "Apellido": "Lopez",
        "Telefono": "9551231234",
        "DNI": "454521",
        "Correo": "maria@lopez.com",
        "Direccion": "Av. Siempre Viva"
    },
    {
        "id": 3,
        "Nombre": "Carlos",
        "Apellido": "Martinez",
        "Telefono": "9556786789",
        "DNI": "987654",
        "Correo": "carlos@martinez.com",
        "Direccion": "Calle Falsa 123"
    },
    {
        "id": 4,
        "Nombre": "Ana",
        "Apellido": "Garcia",
        "Telefono": "9551122334",
        "DNI": "112233",
        "Correo": "ana@garcia.com",
        "Direccion": "Boulevard de los Sueños"
    },
    {
        "id": 5,
        "Nombre": "Luis",
        "Apellido": "Rodriguez",
        "Telefono": "9554455667",
        "DNI": "778899",
        "Correo": "luis@rodriguez.com",
        "Direccion": "Calle Luna"
    }
]

export const Client = () => {
    const [modal, setModal] = useState(false)
    const [data, setdata] = useState(client)
        const [editForm, setEditForm] = useState(false)
    
   
    function openForm() {
        setModal(!modal)
    }

    function delet(e) {
        const id = parseInt(e.target.value);

        const index = data.findIndex((c) => {

            return c.id === id
        })

        const newArray = [...data]
        newArray.splice(index, 1)
        setdata(newArray)
    }

function editClt() {
    setEditForm(!editForm)
}

    return (
        <div className=' flex flex-col p-8 w-3/4 h-screen items-end ml-auto bg-slate-200 gap-9'>
            <nav className='flex flex-row items-center w-full'>
                <h2 className='flex font-bold text-2xl text-center w-1/2 justify-center'>LISTA DE CLIENTES</h2>

                <div className="flex gap-6 w-1/2 justify-end px-10">
                    <button onClick={openForm} className='border-slate-400 border rounded-lg w-28 h-8'>Add Client</button>
                    <button className='border-slate-400 border rounded-lg w-28 h-8'>Delete All</button>
                </div>
            </nav>

            <table className='table-fixed w-full text-center '>
                <thead >
                    <tr  >
                        <th className="border-b-2 border-r-2 border-slate-500"  >ID</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >Nombre</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >Apellido</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >Telefono</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >DNI</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >Correo</th>
                        <th className="border-b-2 border-r-2 border-slate-500" >Direccion</th>
                        <th className="border-b-2 border-slate-500" >Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((c) => (
                        <tr key={c.id} className='text-base'>
                            <td className="border-r-2 py-2 border-slate-500" >{c.id}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.Nombre}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.Apellido}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.Telefono}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.DNI}</td>
                            <td className=" border-r-2 py-2 border-slate-500" >{c.Correo}</td>
                            <td className='border-r-2 py-2 border-slate-500'>{c.Direccion}</td>
                            <td className="flex px-2 py-2 gap-2 ">
                                <button className='border-slate-400 border rounded-lg w-28 h-8' onClick={editClt}>EDIT</button>
                                <button className='border-slate-400 border rounded-lg w-28 h-8' value={c.id} onClick={delet}>DEL</button>
                            </td>
                        </tr>))
                    }

                </tbody>
            </table>

            {modal &&
                <FormClient
                    clickFrom={openForm}
                />
            }
            {
                editForm &&
                <EditClient
                clickEditF={editClt}
                />
            }


        </div>
    )
}
