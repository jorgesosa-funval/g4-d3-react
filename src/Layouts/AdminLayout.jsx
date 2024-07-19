import React from 'react'
import { Navbar } from '../components/Nav2/Navbar'

export const AdminLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
