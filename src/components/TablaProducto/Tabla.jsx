import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
export const Tabla = ({ productos, agregarProducto, eliminarProducto }) => {
  return (
    <table className="content-center mx-auto mt-4 max-w-[90%]">
      <Thead />
      <Tbody productos={productos} agregarProducto={agregarProducto} eliminarProducto={eliminarProducto} />
    </table>
  );
};
