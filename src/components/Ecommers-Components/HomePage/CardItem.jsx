import { Link } from "react-router-dom";

export const CardItem = ({ prod: { id, title, price, img } }) => {
  return (
    <li className='flex-none max-w-[240px] border-[2px] rounded-lg m-4 shadow-xl font-PrincipalFont'>
      <figure className='h-[160px] object-cover'>
        <img src={img} alt={title} className='h-full w-full object-contain p-2 rounded-[15px]' />
      </figure>
      <div className='flex flex-col justify-between p-2 gap-2 h-[155px]'>
        <Link to={`/product/${id}`} className='text-lg font-bold truncate'>
          <h2>{title}</h2>
        </Link>
        <span className='text-xl text-center text-[grey] h-[33.3%]'>$ {price}</span>
        <button className='border-2 px-4 py-2 rounded-lg bg-black text-white font-bold hover:text-black hover:bg-white transition-colors duration-200'>Add to Cart</button>
      </div>
    </li>
  );
};