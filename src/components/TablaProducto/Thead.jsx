export const Thead = () => {
    return (
      <thead>
        <tr className="bg-primary-palet-50 text-left w-[70%] h-[40px] px-5 py-2 relative">
          <th className="text-primary-palet-700 pl-3 w-[1%]">ID</th>
          <th className="text-primary-palet-700 pl-3 w-[3%]">Name</th>
          <th className="text-primary-palet-700 pl-3 w-[3%]">Description</th>
          <th className="text-primary-palet-700 pl-3 w-[2%]">Quantity</th>
          <th className="text-primary-palet-700 pl-3 w-[2%]">Price</th>
          <th className="text-primary-palet-700 pl-3 w-[3%]">Actions</th>
        </tr>
      </thead>
    );
  };