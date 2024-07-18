import React, { useState } from 'react';

const Form = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    value: '',
    state: 'Issued',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'value') {
      const regex = /^\d*\.?\d{0,2}$/;
      if (regex.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agregar la factura
    console.log('Invoice added:', formData);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleForm();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="w-[500px] p-8 bg-primary-palet-50 max-h-fit font-PrincipalFont relative">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md relative">
          <button
            type="button"
            onClick={toggleForm}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <div className="mb-4">
            <label className="block text-primary-palet-950">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary-palet-950">Invoice Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary-palet-950">Total Value</label>
            <div className="relative">
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded mt-1"
                required
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">$</span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-primary-palet-950">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded mt-1 bg-primary-palet-50 font-PrincipalFont"
              required
            >
              <option className='' value="Issued">Issued</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="text-right flex">
            <button
              type="submit"
              className="text-primary-palet-900 hover:bg-primary-palet-300 hover:text-primary-palet-100 border border-primary-palet-600 px-3 py-2 rounded-2xl mr-2"
            >
              Add Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
