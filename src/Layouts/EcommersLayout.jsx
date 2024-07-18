import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function EcommersLayout({ children }) {
  return (
    <div className='w-full h-screen realtive font-PrincipalFont'>
      <Layout />
      {children}
      <Footer />
    </div>
  )
}
