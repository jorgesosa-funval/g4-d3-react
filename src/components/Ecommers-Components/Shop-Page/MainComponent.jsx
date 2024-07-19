import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Category from './Category';
import { Card } from './Card';

const MainComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [data, setData] = useState([]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
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
            (selectedCategory === '' || product.category === selectedCategory)
        );
    });

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <div className="flex">
                <Category onCategoryChange={handleCategoryChange} />
                <Card data={filteredData} />
            </div>
        </div>
    );
};

export default MainComponent;