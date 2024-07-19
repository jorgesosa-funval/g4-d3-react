import React from 'react'
import { AdminLayout } from '../../Layouts/AdminLayout'
import { Income } from '../../components/Admin-Components/incomesExpenses/Income'

export const IncomePage = () => {
    return (
        <div className="w-full flex">
            <AdminLayout>
                <Income/>
            </AdminLayout>
        </div>
    )
}
