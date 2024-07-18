import React, { useState } from "react";
import { Modal } from "./Modal";

export const Tbody = ({productos, eliminarProducto}) => {
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
        <tr className="border-y-2 border-primary-palet-50 text-primary-palet-600 py-10" key={product.id}>
          <td className="pl-3">{product.id}</td>
          <td className="pl-3">{product.name}</td>
          <td className="pl-3">{product.description}</td>
          <td className="pl-3">{product.Quantity}</td>
          <td className="pl-3">${product.price}</td>
          <td>
            <button
              className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl hover:bg-primary-palet-400"
              onClick={() => toggleModal(product)}
            >
              Edit
            </button>
            <button className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl ml-2 hover:bg-primary-palet-400" onClick={() => handleEliminarProducto(product.id)}>Delete</button>
          </td>
        </tr>
      ))}
      {modals && selectedProduct && (
        <Modal isOpen={modals} toggleModal={toggleModal} selectedProduct={selectedProduct} />
      )}
    </tbody>
  );
};