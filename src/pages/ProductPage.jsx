import React from 'react'
import { Product } from '../components/Product/Product'
import { Footer } from '../components/Product/Footer'
import Layout from '../components/Product/Layout'

export default function Home() {
  return (
    <>
      <Layout />
      <Product />
      <Footer />
    </>
  )
}
