import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/5 bg-gray-900 md:h-screen p-12 px-8">
      <ul className="flex md:flex-col">
        {['Products', 'Clients', 'Invoices', 'Incomes', 'Expenses', 'Resumen'].map((item, index) => (
          <li key={index} className="my-2 md:my-0 md:mb-4">
            <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

