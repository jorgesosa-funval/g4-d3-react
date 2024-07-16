import { useEffect, useState } from "react";

export const CardShop = () => {
  const [data, setData0] = useState([]);
  const [count, setCount] = useState(0);
  

  async function getData() {
    const rs = await fetch("https://fakestoreapi.com/products");
    const rsJson = await rs.json();

    setData0(rsJson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul className="flex flex-col gap-4 m-4">
        {data &&
          data.map((item) => (

            <li key={item.id} className="h-[320px] w-[500px]  border-b-2 border-black flex">

                <div className="w-[50%] h-full flex justify-center ">

                  <figure className="border-[2px] border-black rounded-md flex flex-col justify-between items-center content-center p-4 mb-4">

                    <img src={item.image} alt={item.title}  className="h-[80%] object-contain"/>
                     <figcaption className="text-center">{item.title}</figcaption>

                  </figure>

                </div>

              <div className="w-[50%] h-full flex flex-col justify-around p-6 ">
                
                <div className="h-[33.3%]  flex items-start gap-2">
                
                <button className="border-[2px] border-black px-2 py-0 rounded-md font-bold hover:bg-black hover:text-white" onClick={() => setCount( count + 1 )} >+</button>
                <span className="text-xl">{count}</span>
                <button className="border-[2px] border-black px-2 py-0 rounded-md font-bold hover:bg-black hover:text-white" onClick={() => setCount( count - 1 ? 0 : 0)}>-</button>

                </div>

                <span className="h-[33.3%] text-[#125812] font-semibold"> total: $ {item.price}</span>
                <span className="h-[33.3%] text-ellipsis overflow-hidden text-sm ga"> details : {item.description}</span>

              </div>

            </li> 
          ))}
      </ul>
    </div>
  );
};
