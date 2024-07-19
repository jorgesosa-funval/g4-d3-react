import { useState, useEffect } from "react";
import { Add } from "./Add";
export const Header = ({ agregarProducto, productos, vaciarProductos }) => {
  const [showAdd, setShowAdd] = useState(false);
  const toggleAdd = () => { setShowAdd(!showAdd) };
  const handleCancel = () => { setShowAdd(false) };
  return (
    <>
      <header className="flex justify-between content-center mx-auto mt-4 w-full bg-primary-palet-950 px-[50px] py-5">
        <h1 className="from-neutral-800 text-lg text-primary-palet-50">Inventory Management</h1>
        <div className="flex">
          <button className="px-4 py-2 rounded-2xl mr-2 bg-primary-palet-50 hover:bg-primary-palet-400 hover:text-primary-palet-50" onClick={toggleAdd}>Add Product</button>
          <button className="px-4 py-2 rounded-2xl ml-2 bg-primary-palet-50 hover:bg-primary-palet-400 hover:text-primary-palet-50" onClick={vaciarProductos}>Delete Product</button>
        </div>
      </header>
      {showAdd && <Add agregarProducto={agregarProducto} handleCancel={handleCancel} productos={productos} />}
    </>
  );
};
