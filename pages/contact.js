import React from 'react'
import Json from '../JSON/content.json'
import 'bootstrap/dist/css/bootstrap.css'
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'





function contact() {
  return (
    <>
    
    <div className='container'>

       <h2 className='text-center mt-5'>Contact Us</h2>
       <Form/>
     
     
    </div>

    </>
  )
}





const Form = () => {

  return (
  <>
   
    <form action="https://formspree.io/f/xzbweowa" method="post" className='bg-light vstack mx-auto w-75 col-5 mt-5'>

      <div className="row">
        <div className="col-md-6">
          <label className='mt-3 ms-5' htmlFor="first">First Name</label>
          <br/>
          <input className='w-75 py-2 ps-2 ms-5' type="text" id="first" name="first" required />
        </div><br/>

        <div className="col-md-6">
          <label className='mt-3 ms-5' htmlFor="last">Last Name</label>
          <br/>
          <input className='w-75 py-2 ps-2 ms-5' type="text" id="last" name="last" required />
          </div><br/>
      </div>


        <div className="row">
        <div className="col-md-6">
            <label className='mt-3 ms-5' htmlFor="last">Email</label>
            <br/>
            <input className='w-75 py-2 ps-2 ms-5' type="email" id="email" name="email" required /> 
        </div><br/>

        <div className="col-md-6">
            <label className='mt-3 ms-5' htmlFor="last">Phone</label>
            <br/>
            <input className='w-75 py-2 ps-2 ms-5' type="number" id="phone" name="phone" required />
            <br/>
          </div><br/>
        </div>


          <label className='mt-3 ms-5' htmlFor="last">Text</label>
          <textarea className=' py-2  mx-5' type="text" id="text" name="text"/>
          <br/><br/>

          <button type="submit" className='btn btn-outline-secondary mb-2 vstack mx-auto'>Submit</button>
      
    </form>
  
  </>
  )
}










export default contact