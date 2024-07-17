import React from 'react'
import Category from '../components/Shop-Page/Category'
import { Footer } from '../components/Shop-Page/Footer'
import { Privacy } from '../components/Shop-Page/Privacy'
import { Card } from '../components/Shop-Page/Card'
import Navbar from '../components/Shop-Page/Nav'

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className='flex font-PrincipalFont'>
        <Category />
        <Card />
      </div>
      <Footer />
      <Privacy />
    </>
  )
}
