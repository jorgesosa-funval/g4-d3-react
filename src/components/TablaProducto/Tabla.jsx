import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
export const Tabla = ({ productos, agregarProducto }) => {
  return (
    <table className="content-center mx-auto mt-4 max-w-[90%]">
      <Thead />
      <Tbody productos={productos} agregarProducto={agregarProducto}  />
    </table>
  );
};
