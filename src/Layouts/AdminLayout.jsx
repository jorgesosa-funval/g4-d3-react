import React from 'react'
import { Navbar } from '../components/Admin-Components/Nav2/Navbar'

export const AdminLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
