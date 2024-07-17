import React from 'react'
import Header from '../components/HomePage/Header'
import { Card } from '../components/HomePage/Card'
import { Page1 } from '../components/HomePage/Page1'
import { Footer } from '../components/HomePage/Footer'
import { Privacy } from '../components/HomePage/Privacy'

export default function Home() {
  return (
    <>
      <Page1 />
      <Header />
      <Card />
      <Footer/>
      <Privacy/>
    </>
  )
}
