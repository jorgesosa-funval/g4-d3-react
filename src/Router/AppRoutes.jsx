import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/Ecommers-Pages/HomePage'
import ShopPage from '../pages/Ecommers-Pages/ShopPage'
import CartPage from '../pages/Ecommers-Pages/CartPage'
import ProductPage from '../pages/Ecommers-Pages/ProductPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='product/:id' element={<ProductPage />} />
    </Routes>

  )
}
