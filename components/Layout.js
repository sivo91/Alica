import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Layout({ children }) {
  return (
    <div>
     <Navbar/>
     { children }  {/* children vsetko dodane */}
     <Footer/>
    </div>
  )
}

export default Layout