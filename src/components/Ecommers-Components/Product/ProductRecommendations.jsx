import React from 'react'
import { Link } from 'react-router-dom'

export const ProductRecommendations = ({product}) => {
  return (
    <li key={product.id}>
      <div className='w-[70px] h-[125px] overflow-hidden border-2 border-primary-palet- flex flex-col items-center p-1 rounded-md '>
        <figure className='w-[40px] h-[50px]'><img className='w-full h-full object-cover' src={product.image}></img></figure>
        <Link to={`/product/${product.id}`} className='text-[11px] leading-3 text-center'> <span >{product.title}</span></Link><span className='text-[11px] leading-3 text-center'>{product.title}</span>
      </div>
        
    </li>
  )
}
