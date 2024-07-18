import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import CartPage from '../pages/CartPage'
import ProductPage from '../pages/ProductPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/product' element={<ProductPage />} />
    </Routes>

  )
}
