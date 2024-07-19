import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'
import { Product } from '../../components/TablaProducto/Product'

export const ProducPage = () => {
    return (
        <div className='w-full flex'>
            <AdminLayout>
                <Product/>
            </AdminLayout>
        </div>
    )
}
