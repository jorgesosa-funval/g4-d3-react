import React from 'react'
import { CardShop } from '../components/Cart/CardShop'
import { SubmitShop } from '../components/Cart/SubmitShop'


export default function CartPage() {
  return (
    <>
      <div className='flex m-6 py-4 px-60 font-PrincipalFont'>
        <CardShop />
        <SubmitShop />
      </div>

    </>
  )
}
