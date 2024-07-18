import React from 'react';

const products = [
    { id: 1, name: "John Wick", description: "Pencil to kill", price: "$0.99", state: "Issued" },
    { id: 2, name: "Keanu Reeves", description: "Motorcycle for loneliness", price: "$2999.99", state: "Pending" },
    { id: 3, name: "Neo Anderson", description: "Blue or red pill", price: "$0.99", state: "Issued" },
    { id: 4, name: "Kevin Lomax", description: "Cross and holy water", price: "$66.66", state: "Issued" },
];

const AllBills = () => {
    return (
        <div className="w-[70%] ml-auto p-8 bg-gray-100 min-h-screen font-PrincipalFont">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Invoice Description</th>
                        <th className="py-2 px-4 border-b">Total Value</th>
                        <th className="py-2 px-4 border-b">State</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="py-2 px-4 border-b text-center">{product.id}</td>
                            <td className="py-2 px-4 border-b">{product.name}</td>
                            <td className="py-2 px-4 border-b font-light">{product.description}</td>
                            <td className="py-2 px-4 border-b text-center">{product.price}</td>
                            <td className="py-2 px-4 border-b text-center">{product.state}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <button className="text-primary-palet-900 hover:bg-primary-palet-300 hover:text-primary-palet-100 border border-primary-palet-600 px-2 py-1 rounded-xl mr-2">Edit</button>
                                <button className="text-primary-palet-900 bg-primary-palet-200 hover:bg-primary-palet-100 hover:text-primary-palet-600 border border-primary-palet-600 px-2 py-1 rounded-xl">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBills;
