import React from 'react'
import { Product } from '../../components/Ecommers-Components/Product/Product'
import EcommersLayout from '../../Layouts/EcommersLayout'

export default function Home() {
  return (
    <>
      <EcommersLayout>
        <Product />
        <div className='p-8'/>
      </EcommersLayout>
    </>
  )
} 
