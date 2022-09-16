import React from 'react'
import Json from '../JSON/content.json'

function contact() {
  return (
    <>
     <h1 className='text-center'>Contact</h1>
     {
      Json.map((item) => {
        return (
          <h2 key={item.id}>{item.title}</h2>
        )
      })
     }
    </>
  )
}

export default contact