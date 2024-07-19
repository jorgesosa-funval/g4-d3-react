import React from 'react';

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-none">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSearch}
      />
    </nav>
  );
};

export default Navbar;