import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({children}) {
  return (
    <div className="h-screen">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
