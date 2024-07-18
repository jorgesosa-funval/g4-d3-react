import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
export const Tabla = () => {
  return (
    <table className="content-center mx-auto mt-4 max-w-[90%]">
      <Thead />
      <Tbody />
    </table>
  );
};
