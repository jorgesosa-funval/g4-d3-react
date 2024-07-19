import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'
import { Excome } from '../../components/Admin-Components/incomesExpenses/Excome'

export const ExcomePage = () => {
  return (
    <div className='w-full flex'>
        <AdminLayout>
            <Excome/>
        </AdminLayout>
    </div>
  )
}
