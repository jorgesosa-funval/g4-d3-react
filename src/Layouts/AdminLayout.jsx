import React from 'react'
import { Nav } from '../components/Navbar/Nav'

export const AdminLayout = ({children}) => {
  return (
    <>
        <Nav/>
        {children}
    </>
  )
}
