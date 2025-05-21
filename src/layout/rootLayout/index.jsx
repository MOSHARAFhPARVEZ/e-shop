import React from 'react'
import Header from '../../globalComponents/commonLayouts/header'
import Footer from '../../globalComponents/commonLayouts/footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout