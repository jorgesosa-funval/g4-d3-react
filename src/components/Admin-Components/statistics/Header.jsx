import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">Inventory Management</h1>
      <div>
        <button className="bg-primary-palet-400 hover:bg-primary-palet-500 text-white font-bold py-2 px-4 rounded mr-2">
          Add Product
        </button>
        <button className="bg-primary-palet-600 hover:bg-primary-palet-700 text-white font-bold py-2 px-4 rounded">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default Header;