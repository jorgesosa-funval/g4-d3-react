import React, { useEffect, useState } from 'react';

const Category = ({ onCategoryChange }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const getCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        
        setSelectedCategories(prevSelected => {
            if (isChecked) {
                return [...prevSelected, value];
            } else {
                return prevSelected.filter(category => category !== value);
            }
        });
    };

    useEffect(() => {
        onCategoryChange(selectedCategories);
    }, [selectedCategories, onCategoryChange]);

    return (
        <div className="w-72 bg-white px-10 py-5 shadow-none font-PrincipalFont">
            <div className="mb-8">
                <h2 className="text-lg px-10 font-semibold mb-3">Categories</h2>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index} className="mb-2">
                            <input 
                                type="checkbox" 
                                name="category" 
                                value={category} 
                                onChange={handleCategoryChange} 
                                className="mr-1"
                            />
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;