import React, { useState } from "react";
export const Add = ({ handleCancel, agregarProducto, productos }) => {
    const [nuevoProducto, setNuevoProducto] = useState({
        name: "",
        description: "",
        Quantity: 0,
        price: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto({ ...nuevoProducto, [name]: name === "Quantity" || name === "price" ? parseInt(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { ...nuevoProducto, id: productos.length + 1 };
        console.log(newProduct);
        setNuevoProducto({
            name: "",
            description: "",
            Quantity: 0,
            price: 0,
        });
        agregarProducto(newProduct);
        setNuevoProducto({
            name: "",
            description: "",
            Quantity: 0,
            price: 0,
        });
    };

    const handleCancelClick = () => { handleCancel() };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-primary-palet-500 bg-opacity-50">
            <div className="bg-primary-palet-50 p-6 rounded-lg shadow-xl">
                <h2 className="text-lg mb-4">Agregar Producto</h2>
                <form onSubmit={handleSubmit} id="Producto" className="flex flex-col w-full mx-auto">
                    <label htmlFor="nombre" className="h-[50px] content-center pl-2 text-primary-palet-950">Nombre:</label>
                    <input type="text" id="nombre" name="name" value={nuevoProducto.name} onChange={handleChange} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="descripcion" className="h-[50px] content-center pl-2 text-primary-palet-950">Descripción:</label>
                    <input type="text" id="descripcion" name="description" value={nuevoProducto.description} onChange={handleChange} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="Quantity" className="h-[50px] content-center pl-2 text-primary-palet-950">Cantidad:</label>
                    <input type="number" id="Quantity" name="Quantity" value={nuevoProducto.Quantity} onChange={handleChange} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="price" className="h-[50px] content-center pl-2 text-primary-palet-950">Precio:</label>
                    <input type="number" id="price" name="price" value={nuevoProducto.price} onChange={handleChange} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <div className="flex justify-between gap-5">
                        <button type="submit" className="bg-primary-palet-700 text-primary-palet-50 px-4 py-2 rounded-lg hover:bg-primary-palet-800">Agregar Producto</button>
                        <button type="button" className="bg-primary-palet-300 text-primary-palet-50 px-4 py-2 rounded-lg hover:bg-gray-400" onClick={handleCancelClick}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
