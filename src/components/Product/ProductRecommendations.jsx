import React from 'react'

export const ProductRecommendations = ({product}) => {
  return (
    <li key={product.id}>
      <div className='w-[70px] h-[125px] overflow-hidden border-2 border-primary-palet- flex flex-col items-center p-1 rounded-md '>
        <figure className='w-[40px] h-[50px]'><img className='w-full h-full object-cover' src={product.image}></img></figure>
        <span className='text-[11px] leading-3 text-center'>{product.title}</span>
      </div>
        
    </li>
  )
}
