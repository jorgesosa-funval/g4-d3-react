import React from 'react'

export const Input = ({placeholder, type}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='my-5 px-2 py-1 rounded-xl w-[400px]  '/>
    </div>
  )
}
