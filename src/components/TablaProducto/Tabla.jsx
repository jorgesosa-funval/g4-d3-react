import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
export const Tabla = ({ productos, eliminarProducto, editarProducto }) => {
  return (
    <table className="content-center mt-6 w-[99%] mx-auto">
      <Thead />
      <Tbody productos={productos} eliminarProducto={eliminarProducto} editarProducto={editarProducto} />
    </table>
  );
};
