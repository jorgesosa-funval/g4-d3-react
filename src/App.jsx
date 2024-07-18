import React from 'react';
import HeaderBills from './components/headerbills/HeaderBills.jsx';
import AllBills from './components/AllBills/AllBills.jsx';
import InvoiceProvider from './components/context/InvoiceContext.jsx';

const App = () => {
  return (
    <InvoiceProvider>
      <div>
        <HeaderBills />
        <AllBills />
      </div>
    </InvoiceProvider>
  );
};

export default App;
