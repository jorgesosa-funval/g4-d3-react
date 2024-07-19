import React, { useState, useCallback, useEffect } from 'react'
import Category from '../components/Shop-Page/Category'
import { Footer } from '../components/Shop-Page/Footer'
import { Privacy } from '../components/Shop-Page/Privacy'
import { Card } from '../components/Shop-Page/Card'
import Navbar from '../components/Shop-Page/Nav'

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredResults = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, products]);

  return (
    <>
      <Navbar 
        className="mb-6" 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
      />
      <div className='flex font-PrincipalFont mt-6'>
        <Category />
        <Card products={searchTerm ? searchResults : products} />
      </div>
      <Footer />
      <Privacy />
    </>
  )
}