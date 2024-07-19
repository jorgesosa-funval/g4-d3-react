import { useState } from "react";
import { Edit } from "./Edit";
export const Tbody = ({ productos, eliminarProducto, editarProducto }) => {
  const [modals, setModals] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toggleModal = (product) => {
    setSelectedProduct(product);
    setModals(!modals);
  };
  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };
  return (
    <tbody>
      {productos.map((product) => (
        <tr className="border-y-2 border-primary-palet-50 text-primary-palet-950 py-10" key={product.id}>
          <td className="py-3 px-3 w-1">{product.id}</td>
          <td className="py-3 px-3 w-[20%]">{product.name}</td>
          <td className="py-3 px-3 w-[40%]">{product.description}</td>
          <td className="py-3 px-3 w-[10%]">{product.Quantity}</td>
          <td className="py-3 px-3 w-[10%]">${product.price}</td>
          <td className="flex items-center justify-center">
            <button className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl hover:bg-primary-palet-400" onClick={() => toggleModal(product)}>Edit</button>
            <button className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl ml-2 hover:bg-primary-palet-400" onClick={() => handleEliminarProducto(product.id)}>Delete</button>
          </td>
        </tr>
      ))}
      {modals && selectedProduct && (
        <Edit isOpen={modals} toggleModal={toggleModal} selectedProduct={selectedProduct} editarProducto={editarProducto} />
      )}
    </tbody>
  );
};