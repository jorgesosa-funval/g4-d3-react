import React from 'react'
import Header from '../../components/Ecommers-Components/HomePage/Header'
import { Card } from '../../components/Ecommers-Components/HomePage/Card'
import { Page1 } from '../../components/Ecommers-Components/HomePage/Page1'
import EcommersLayout from '../../Layouts/EcommersLayout'

export default function Home() {
  return (
    <>
      <EcommersLayout>
        <Page1 />
        <Header />
        <Card />
      </EcommersLayout>
    </>
  )
}
