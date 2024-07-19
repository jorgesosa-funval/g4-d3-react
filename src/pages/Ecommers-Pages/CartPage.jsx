import React from 'react'
import { CardShop } from '../../components/Ecommers-Components/Cart/CardShop'
import { SubmitShop } from '../../components/Ecommers-Components/Cart/SubmitShop'
import EcommersLayout from '../../Layouts/EcommersLayout'


export default function CartPage() {
  return (
    <>
      <EcommersLayout>
        <div className='flex m-6 py-20 px-60 font-PrincipalFont'>
          <CardShop />
          <SubmitShop />
        </div>
      </EcommersLayout>
    </>
  )
}
