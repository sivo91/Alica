import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link href="/" >
    <a className="navbar-brand fs-3" >Title here</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-5">

      
        <li className="nav-item fs-3">
          <Link href="/about">
            <a className="nav-link">About</a> 
          </Link>
        </li>
    

      <li className="nav-item fs-3">
        <Link href="#">
          <a className="nav-link">Features</a>
        </Link>
      </li>
      

      
      <li className="nav-item fs-3">
        <Link href="#">
          <a className="nav-link">Pricing</a>
        </Link>
      </li>
      

      
        <li className="nav-item fs-3">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar