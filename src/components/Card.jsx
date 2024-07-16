
export const Card = () => {
  return (
    <ul className='m-6'>
        <li className='h-[450px] w-[330px] border-[2px] border-black rounded-lg m-4'>

            <figure className='h-[70%]'>
                <img src="https://picsum.photos/id/225/200/300" alt="imagen prueba" className='h-full w-full object-cover p-2 rounded-[15px]' />
            </figure>

            <div className='flex flex-col justify-between p-2 gap-2 h-[30%]'>
                <h1 className='text-2xl font-bold'>Ceramic Mug</h1>
                <span className='text-xl text-[grey]'>$14.99</span>
                <button className='border-[2px] px-[6px] py-[8px] rounded-lg bg-black text-white font-bold mr-[180px] hover:text-black hover:bg-white'>Add to Card</button>
            </div>
            
        </li>
      
    </ul>
  )
}


