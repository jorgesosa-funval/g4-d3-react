import React from 'react';
import HeaderBills from './headerbills/HeaderBills.jsx';
import AllBills from './AllBills/AllBills.jsx';
import InvoiceProvider from './context/InvoiceContext.jsx';


export const Facturas = () => {
  return (
    <div className="w-[80%] flex  font-PrincipalFont">
      <InvoiceProvider>
        <div className='w-full'>
          <HeaderBills />
          <AllBills />
        </div>
      </InvoiceProvider>
    </div>
  )
}
