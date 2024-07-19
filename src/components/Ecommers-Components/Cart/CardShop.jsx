import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardShop = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  async function getData() {
    const rs = await fetch("https://fakestoreapi.com/products");
    const rsJson = await rs.json();
    setData(rsJson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="font-PrincipalFont">
      <ul className="flex flex-col gap-4 m-4">
        {data &&
          data.map((item) => (
            <li key={item.id} className="h-[320px] w-[500px] border-b-2 border-black flex">
              <div className="w-[50%] h-full flex justify-center">
                <figure className="border-[2px] border-black rounded-md flex flex-col justify-between items-center content-center p-4 mb-4">
                  <img src={item.image} alt={item.title} className="h-[80%] object-contain" />
                  <Link to={`/product/${item.id}`} className="text-center text-sm auto-resize font-bold">
                    <figcaption>{item.title}</figcaption>
                  </Link>
                </figure>
              </div>
              <div className="w-[50%] h-full flex flex-col justify-around p-6">
                <div className="h-[33.3%] flex items-start gap-2">
                  <button
                    className="border-[2px] border-black px-2 py-0 rounded-md font-bold hover:bg-black hover:text-white"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                  <span className="text-xl">{count}</span>
                  <button
                    className="border-[2px] border-black px-2 py-0 rounded-md font-bold hover:bg-black hover:text-white"
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                  >
                    -
                  </button>
                </div>
                <span className="h-[33.3%] text-[#125812] font-semibold py-5">total: $ {item.price}</span>
                <div className="overflow-hidden">
                  <span className="h-[33.3%] overflow-y-hidden text-base">Details: {item.description}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};