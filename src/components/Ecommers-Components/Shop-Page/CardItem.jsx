import { Link } from "react-router-dom";

export const CardItem = ({ prod: { id, title, price, image, category } }) => {
    return (
        <li className='h-[450px] w-[330px] border-[2px] rounded-lg m-4 shadow-sm'>
            <figure className='h-[290px] object-cover'>
                <img src={image} alt={title} className='h-full w-full object-contain p-2 rounded-[15px]' />
            </figure>
            <div className='flex flex-col justify-between p-2 gap-2 h-[155px] '>
                <Link to={`/product/${id}`} className='text-xl font-bold h-[33.3%] truncate '><h2 >{title}</h2></Link>
                <span className='text-xl text-[grey] h-[33.3%]'>$ {price}</span>
                <span className='text-sm text-[grey] h-[33.3%]'>{category}</span>
                <button className='h-[33.3%] border-[2px] px-[6px] py-[8px] rounded-lg bg-black text-white font-bold mr-[180px] hover:text-black hover:bg-white'>Add to Card</button>
            </div>
        </li>
    )
}