import React, { useState } from 'react';

const Form = () => {
    const [amount, setAmount] = useState('');
    const [statePending, setStatePending] = useState(false);
    const [stateIssued, setStateIssued] = useState(false);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        const regex = /^\d*\.?\d{0,2}$/;
        if (value === '' || regex.test(value)) {
            setAmount(value);
        }
    };

    const handleStatePendingChange = () => {
        setStatePending(!statePending);
        if (stateIssued) {
            setStateIssued(false);
        }
    };

    const handleStateIssuedChange = () => {
        setStateIssued(!stateIssued);
        if (statePending) {
            setStatePending(false);
        }
    };

    return (
        <form className="flex space-x-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-palet-700 font-PrincipalFont">Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-palet-500 focus:border-primary-palet-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-palet-700 font-PrincipalFont">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-palet-500 focus:border-primary-palet-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-primary-palet-700 font-PrincipalFont">Amount</label>
                <div className="mt-1 flex rounded-md shadow-sm w-36">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-700 sm:text-sm">$</span>
                    <input type="text" id="amount" value={amount} onChange={handleAmountChange} className="block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-primary-palet-500 focus:border-primary-palet-500 sm:text-sm" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-primary-palet-700 font-PrincipalFont">State</label>
                <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center py-1.5">
                        <input
                            id="state-pending"
                            type="checkbox"
                            className="focus:ring-primary-palet-500 h-4 w-4 text-primary-palet-600 border-gray-300 rounded"
                            checked={statePending}
                            onChange={handleStatePendingChange}
                        />
                        <label htmlFor="state-pending" className="ml-2 block text-sm font-medium text-primary-palet-700 font-PrincipalFont">Pending</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="state-issued"
                            type="checkbox"
                            className="focus:ring-primary-palet-500 h-4 w-4 text-primary-palet-600 border-gray-300 rounded"
                            checked={stateIssued}
                            onChange={handleStateIssuedChange}
                        />
                        <label htmlFor="state-issued" className="ml-2 block text-sm font-medium text-primary-palet-700 font-PrincipalFont">Issued</label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
