import React from 'react'
import Navbar from './Navbar'



function Layout({ children }) {
  return (
    <div>
     <Navbar/>
     { children }  {/* children vsetko dodane */}
    </div>
  )
}

export default Layout