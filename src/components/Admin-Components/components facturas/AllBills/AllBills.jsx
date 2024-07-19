import React, { useContext, useState } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';
import Form from '../Form/Form';

const AllBills = () => {
  const { products, deleteInvoice } = useContext(InvoiceContext);
  const [showForm, setShowForm] = useState(false);
  const [invoiceToEdit, setInvoiceToEdit] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (showForm) setInvoiceToEdit(null);
  };

  const handleEdit = (invoice) => {
    setInvoiceToEdit(invoice);
    toggleForm();
  };

  return (
    <div className="w-full ml-auto p-8 bg-white min-h-screen font-PrincipalFont">
      <table className="min-w-full bg-primary-palet-50 ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Invoice Description</th>
            <th className="py-2 px-4 border-b">Total Value</th>
            <th className="py-2 px-4 border-b">State</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b text-center">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b font-light">{product.description}</td>
              <td className="py-2 px-4 border-b text-center">{product.value}</td>
              <td className="py-2 px-4 border-b text-center">{product.state}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="text-primary-palet-900 hover:bg-primary-palet-300 hover:text-primary-palet-100 border border-primary-palet-600 px-2 py-1 rounded-xl mr-2" onClick={() => handleEdit(product)}>Edit</button>
                <button className="text-primary-palet-900 bg-primary-palet-200 hover:bg-primary-palet-100 hover:text-primary-palet-600 border border-primary-palet-600 px-2 py-1 rounded-xl" onClick={() => deleteInvoice(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && <Form toggleForm={toggleForm} invoiceToEdit={invoiceToEdit} />}
    </div>
  );
};

export default AllBills;
