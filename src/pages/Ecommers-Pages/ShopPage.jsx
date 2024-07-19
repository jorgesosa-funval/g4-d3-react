import React from 'react'
import Category from '../../components/Ecommers-Components/Shop-Page/Category'
import { Card } from '../../components/Ecommers-Components/Shop-Page/Card'
import Navbar from '../../components/Ecommers-Components/Shop-Page/Nav'
import EcommersLayout from '../../Layouts/EcommersLayout'

export default function ShopPage() {
  return (
    <>
      <EcommersLayout>
        <div className='flex font-PrincipalFont mt-6'>
          <Category />
          <div>
            <Navbar className="mb-6" />
            <Card />
          </div>
        </div>
      </EcommersLayout>
    </>
  )
}
