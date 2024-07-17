import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([])
    const getCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])
    
    const colors = ['Black', 'White', 'Blue', 'Red'];

    return (
        <div className="w-64 bg-white p-4 shadow-md">
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} className="mb-1">
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2">Filters</h2>
                <div className="mb-4">
                    <h3 className="font-medium mb-1">Price Range</h3>
                    {/* I still didn't add the filter by price*/}
                </div>
                <div>
                    <h3 className="font-medium mb-1">Color</h3>
                    {colors.map((color, index) => (
                        <div key={index} className="flex items-center mb-1">
                            <input type="checkbox" id={color} className="mr-2" />
                            <label htmlFor={color}>{color}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;