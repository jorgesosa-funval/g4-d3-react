import React from 'react'
import Layout from '../components/Ecommers-Components/Layout'
import { Footer } from '../components/Ecommers-Components/Footer'

export default function EcommersLayout({ children }) {
  return (
    <div className='w-full h-screen realtive font-PrincipalFont'>
      <Layout />
      {children}
      <Footer />
    </div>
  )
}
