import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'
import Allcomps from '../../components/Admin-Components/statistics/Allcomps'

export const ResumenPage = () => {
  return (
    <div className='w-full flex'>
      <AdminLayout>
        <Allcomps />
      </AdminLayout>
    </div>
  )
}
