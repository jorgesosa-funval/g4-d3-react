import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

const InvoiceProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "John Wick", description: "Pencil to kill", value: "$0.99", state: "Issued" },
    { id: 2, name: "Keanu Reeves", description: "Motorcycle for loneliness", value: "$2999.99", state: "Pending" },
    { id: 3, name: "Neo Anderson", description: "Blue or red pill", value: "$0.99", state: "Issued" },
    { id: 4, name: "Kevin Lomax", description: "Cross and holy water", value: "$66.66", state: "Issued" },
  ]);
  const [nextId, setNextId] = useState(products.length + 1);

  const addInvoice = (invoice) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...invoice,
        id: nextId,
        value: invoice.value.startsWith('$') ? invoice.value : `$${invoice.value}`
      }
    ]);
    setNextId(nextId + 1);
  };

  const deleteInvoice = (id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  const deleteAllInvoices = () => {
    setProducts([]);
  };

  const updateInvoice = (updatedInvoice) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedInvoice.id ? { ...product, ...updatedInvoice } : product
      )
    );
  };

  return (
    <InvoiceContext.Provider value={{ products, addInvoice, deleteInvoice, deleteAllInvoices, updateInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
