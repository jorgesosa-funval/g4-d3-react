

export const CardItem = ({prod: {title, price, img, img2}}) => {

  return (
    <li className='h-[450px] w-[330px] border-[2px] rounded-lg m-4 shadow-xxl'>

    <figure className='h-[290px]'>
        <img src={img} alt={title} className='h-full w-full object-cover p-2 rounded-[15px]' />
    </figure>

    <div className='flex flex-col justify-between p-2 gap-2 h-[155px]'>
        <h2 className='text-2xl font-bold '>{title}</h2>
        <span className='text-xl text-[grey]'>$ {price}</span>
        <button className='border-[2px] px-[6px] py-[8px] rounded-lg bg-black text-white font-bold mr-[180px] hover:text-black hover:bg-white'>Add to Card</button>
    </div>
    
</li>
  )
}


