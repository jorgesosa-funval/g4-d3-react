import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";

export const Tbody = () => {
  const [products, setProducts] = useState([]);
  const [modals, setModals] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setModals(!modals);
  };

  return (
    <tbody>
      {products.map((product) => (
        <tr className="border-y-2 border-primary-palet-50 text-primary-palet-600 py-10" key={product.id}>
          <td className="pl-3">{product.id}</td>
          <td className="pl-3">{product.title}</td>
          <td className="pl-3">{product.description}</td>
          <td className="pl-3">{product.rating.count}</td>
          <td className="pl-3">${product.price}</td>
          <td>
            <button
              className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl hover:bg-primary-palet-400"
              onClick={() => toggleModal(product)} // Llamar toggleModal con el producto correcto
            >
              Edit
            </button>
            <button className="border-2 border-primary-palet-400 px-2 py-1 rounded-2xl ml-2 hover:bg-primary-palet-400">Delete</button>
          </td>
        </tr>
      ))}
      {modals && selectedProduct && (
        <Modal isOpen={modals} toggleModal={toggleModal} selectedProduct={selectedProduct} />
      )}
    </tbody>
  );
};