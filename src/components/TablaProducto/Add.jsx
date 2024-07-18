export const Add = ({ setShowAdd }) => {
    const handleCancel = () => {
        setShowAdd(false)

    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-primary-palet-500 bg-opacity-50">
            <div className="bg-primary-palet-50 p-6 rounded-lg shadow-xl">
                <span className="absolute top-2 right-4 text-primary-palet-900 cursor-pointer text-7xl" onClick={handleCancel}>×</span>
                <h2 className="text-lg mb-4">Agregar Producto</h2>
                <form id="Producto" className="flex flex-col w-[90%] mx-auto">
                    <label htmlFor="nombre" className="h-[50px] content-center pl-2 text-primary-palet-950">Nombre:</label>
                    <input type="text" id="nombre" name="name" required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="descripcion" className="h-[50px] content-center pl-2 text-primary-palet-950">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="quantity" className="h-[50px] content-center pl-2 text-primary-palet-950">Cantidad:</label>
                    <input type="text" id="quantity" name="quantity" required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <label htmlFor="price" className="h-[50px] content-center pl-2 text-primary-palet-950">Precio:</label>
                    <input type="text" id="price" name="price" required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
                    <button type="submit" className="bg-primary-palet-500 text-white px-4 py-2 rounded-lg hover:bg-primary-palet-800">Agregar Producto</button>
                </form>
            </div>
        </div>
    );
};
