import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/Ecommers-Pages/HomePage'
import ShopPage from '../pages/Ecommers-Pages/ShopPage'
import CartPage from '../pages/Ecommers-Pages/CartPage'
import ProductPage from '../pages/Ecommers-Pages/ProductPage'

import { SignIn } from '../components/Admin-Components/SignIn/SignIn'
import { ResumenPage } from '../pages/AdminPages/ResumenPage'
import { ProducPage } from '../pages/AdminPages/ProducPage'
import { ClientPage } from '../pages/AdminPages/ClientPage'
import { FacturePage } from '../pages/AdminPages/FacturePage'
import { IncomePage } from '../pages/AdminPages/IncomePage'
import { ExcomePage } from '../pages/AdminPages/ExcomePage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='product/:id' element={<ProductPage />} />
      <Route path='/home/' element={<SignIn />} />
      <Route path='/home/productos' element={<ProducPage />} />
      <Route path='/home/clientes' element={<ClientPage/>} />
      <Route path='/home/facturas' element={<FacturePage/>} />
      <Route path='/home/ingresos' element={<IncomePage/>} />
      <Route path='/home/egresos' element={<ExcomePage/>} />
      <Route path='/home/resumen' element={<ResumenPage />} />
    </Routes>

  )
}
