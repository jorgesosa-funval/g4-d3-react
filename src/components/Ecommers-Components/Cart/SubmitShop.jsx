import React from 'react'

export const SubmitShop = () => {
    return (
        <div className='w-full h-lvh grid place-content-center sticky top-8'>
            <div className='w-[300px] h-[750px] flex flex-col place-content-around border-4 border-primary-palet-950 rounded-3xl font-PrincipalFont'>
                <div className='w-full h-3/5 p-4 flex flex-col place-content-around '>
                    <h1 className='text-center uppercase font-bold text-3xl'>Sumary</h1>
                    <span>Sub total</span>
                    <h3 className='text-center text-primary-palet-600 text-2xl font-bold'>$/. 100</h3>
                    <span>Taxes</span>
                    <h3 className='text-center  text-primary-palet-600 text-2xl font-bold'>$/. 15</h3>
                    <span className='uppercase font-bold '>Total</span>
                    <h2 className='text-center text-3xl font-bold'> $/. 115</h2>
                </div>
                <button className='w-[100px] h-[40px] mx-auto rounded-md bg-primary-palet-950 text-primary-palet-50 uppercase font-bold'>Submit</button>
            </div>
        </div>
    )
}