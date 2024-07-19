import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'
import { Client } from '../../components/Admin-Components/ClientList/Client'

export const ClientPage = () => {
    return (
        <div className='w-full flex'>
            <AdminLayout>
                <Client/>
            </AdminLayout>
        </div>
    )
}
