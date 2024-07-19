import React, { useState, useContext } from 'react';
import Form from '../Form/Form.jsx';
import { InvoiceContext } from '../context/InvoiceContext.jsx';

const HeaderBills = () => {
  const [showForm, setShowForm] = useState(false);
  const { deleteAllInvoices } = useContext(InvoiceContext);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="w-full ml-auto font-PrincipalFont">
      <div className="flex justify-between items-center py-7 px-8 bg-primary-palet-700 shadow">
        <h1 className="text-xl font-bold text-white">Invoice Control</h1>
        <div>
          <button className="text-primary-palet-900 hover:bg-primary-palet-300 hover:text-primary-palet-100 border border-primary-palet-200 px-3 py-2 bg-primary-palet-200 rounded-2xl mr-2" onClick={toggleForm}>Add Invoice</button>
          <button className="text-primary-palet-900 bg-primary-palet-200 hover:bg-primary-palet-100 hover:text-primary-palet-600 border border-primary-palet-600 px-3 py-2 rounded-2xl mr-2" onClick={deleteAllInvoices}>Delete All</button>
        </div>
      </div>
      {showForm && <Form toggleForm={toggleForm} />}
    </div>
  );
};

export default HeaderBills;
