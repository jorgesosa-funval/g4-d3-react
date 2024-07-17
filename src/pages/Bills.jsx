import Form from '../components/Form.jsx';
import { AllBills } from '../components/AllBills.jsx';

const Bill = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/10 bg-primary-palet-900"></div>
      <div className="w-7/10 bg-primary-palet-50 p-8">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold font-PrincipalFont text-primary-palet-800">Bill Information</h1>
          <div className="ml-auto flex space-x-4">
            <button type="submit" className="inline-flex font-PrincipalFont justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-palet-50 bg-primary-palet-600 hover:bg-primary-palet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-palet-500">Agregar</button>
            <button type="submit" className="inline-flex font-PrincipalFont justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-palet-50 bg-primary-palet-600 hover:bg-primary-palet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-palet-500">Eliminar</button>
          </div>
        </div>
        <Form />
        <AllBills />
        </div>
        
    </div>
  );
};

export default Bill;
