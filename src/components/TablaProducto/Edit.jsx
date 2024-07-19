export const Edit = ({ isOpen, toggleModal, selectedProduct }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-primary-palet-500 bg-opacity-50">
      <div className="bg-primary-palet-50 p-6 rounded-lg shadow-xl">
        {/* <span className="absolute top-2 right-4 text-primary-palet-900 cursor-pointer text-7xl" onClick={toggleModal}>×</span> */}
        <h2 className="text-lg mb-4">Editar Producto</h2>
        <form id="Producto" className="flex flex-col">
          <label htmlFor="nombre" className="mb-2">Nombre:</label>
          <input type="text" id="nombre" name="name" defaultValue={selectedProduct.name} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />

          <label htmlFor="descripcion" className="mb-2">Descripción:</label>
          <input type="text" id="descripcion" name="descripcion" defaultValue={selectedProduct.description} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4 h-[100px] w-60" />

          <label htmlFor="quantity" className="mb-2">Cantidad:</label>
          <input type="text" id="quantity" name="quantity" defaultValue={selectedProduct.Quantity} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />

          <label htmlFor="price" className="mb-2">Precio:</label>
          <input type="text" id="price" name="price" defaultValue={`$${selectedProduct.price}`} required className="border border-primary-palet-400 px-3 py-2 rounded-lg mb-4" />
          <div className="flex justify-between gap-5">
            <button type="submit" className="bg-primary-palet-500 text-white px-4 py-2 rounded-lg hover:bg-primary-palet-800">Actualizar</button>
            <button type="button" className="bg-primary-palet-300 text-primary-palet-50 px-4 py-2 rounded-lg hover:bg-gray-400" onClick={toggleModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};