import { useState } from "react";
import { Add } from "./Add";
export const Header = ({ agregarProducto, productos }) => {
  const [showAdd, setShowAdd] = useState(false);
  const toggleAdd = () => {
    setShowAdd(!showAdd);
  };
  const handleCancel = () => {
    setShowAdd(false);
  };
  return (
    <>
      <header className="flex justify-between content-center mx-auto mt-4 max-w-[90%]">
        <h1 className="from-neutral-800 text-lg">Inventory Management</h1>
        <div className="flex">
          <button className="border-2 border-primary-palet-400 px-4 py-2 rounded-2xl mr-2 bg-primary-palet-50 hover:bg-primary-palet-400" onClick={toggleAdd}>Add Product</button>
          <button className="border-2 border-primary-palet-400 px-4 py-2 rounded-2xl ml-2 bg-primary-palet-50 hover:bg-primary-palet-400">Delete Product</button>
        </div>
      </header>
      {showAdd && <Add agregarProducto={agregarProducto} handleCancel={handleCancel} productos={productos}/>}
    </>
  );
};
