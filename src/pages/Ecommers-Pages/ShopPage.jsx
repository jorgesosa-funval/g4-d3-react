import React, { useState, useEffect } from 'react';
import Category from '../../components/Ecommers-Components/Shop-Page/Category';
import { Card } from '../../components/Ecommers-Components/Shop-Page/Card';
import Navbar from '../../components/Ecommers-Components/Shop-Page/Nav';
import EcommersLayout from '../../Layouts/EcommersLayout';

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [data, setData] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  async function getData() {
    const rs = await fetch('https://fakestoreapi.com/products');
    const rsJson = await rs.json();
    setData(rsJson);
  }

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter(product => {
    return (
      (searchTerm === '' || product.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    );
  });

  return (
    <EcommersLayout>
      <div className='flex font-PrincipalFont mt-6'>
        <Category onCategoryChange={handleCategoryChange} />
        <div>
          <Navbar onSearch={handleSearch} className="mb-6" />
          <Card data={filteredData} />
        </div>
      </div>
    </EcommersLayout>
  );
}