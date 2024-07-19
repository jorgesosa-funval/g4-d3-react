import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'

import {Facturas} from '../../components/Admin-Components/components facturas/Facturas'

export const FacturePage = () => {
    return (
        <div className='w-full flex'>
            <AdminLayout>
                <Facturas/>
            </AdminLayout>
        </div>
    )
}
