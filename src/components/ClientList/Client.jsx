import React, { useEffect, useState } from 'react'
import { FormClient } from './FormClient'
import { EditClient } from './EditClient'

const client = [
    {
        "id": 1,
        "nombre": "Jorge",
        "apellido": "Sosa",
        "telefono": "9555454454",
        "dni": "121521",
        "correo": "jorge@sosa.com",
        "direccion": "St. Zoom"
    },
    {
        "id": 2,
        "nombre": "Maria",
        "apellido": "Lopez",
        "telefono": "9551231234",
        "dni": "454521",
        "correo": "maria@lopez.com",
        "direccion": "Av. Siempre Viva"
    },
    {
        "id": 3,
        "nombre": "Carlos",
        "apellido": "Martinez",
        "telefono": "9556786789",
        "dni": "987654",
        "correo": "carlos@martinez.com",
        "direccion": "Calle Falsa 123"
    },
    {
        "id": 4,
        "nombre": "Ana",
        "apellido": "Garcia",
        "telefono": "9551122334",
        "dni": "112233",
        "correo": "ana@garcia.com",
        "direccion": "Boulevard de los Sueños"
    },
    {
        "id": 5,
        "nombre": "Luis",
        "apellido": "Rodriguez",
        "telefono": "9554455667",
        "dni": "778899",
        "correo": "luis@rodriguez.com",
        "direccion": "Calle Luna"
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
                            <td className="border-r-2 py-2 border-slate-500" >{c.nombre}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.apellido}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.telefono}</td>
                            <td className="border-r-2 py-2 border-slate-500" >{c.dni}</td>
                            <td className=" border-r-2 py-2 border-slate-500" >{c.correo}</td>
                            <td className='border-r-2 py-2 border-slate-500'>{c.direccion}</td>
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
                    data={data}
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
