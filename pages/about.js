import React from 'react'
import { entryCards } from '../lib/data';
import Link from 'next/link';
import Image from 'next/image';


export async function getStaticProps() {
  const allData = entryCards();
  return {
    props: {
      allData
    }
  }
}



function about({ allData }) {
  return (
<>

    <h1 className='text-center'>about</h1>

    <div className='d-flex justify-content-center'>
     { allData.map(({ id, title, img }) => (
              <Link key={id} href={`/${id}`}>
               <div className="card my-5">
                 <div className="img mt-4">
                  <Image src={img}
                     height={44}  width={50}
                     alt="img" />
                 </div>
                
                  <div className="card-body">
                    <p className="card-text text-center name">{title}</p>
                  </div>
                 
                </div>
              </Link>
            ))
          }
   </div>

       <style jsx>{`

          .content {
             position:relative;
            width:80%;
            left:10%;
            display:flex;
            flex-wrap:wrap;
           
            justify-content:space-evenly;
          }

          .card {
            position:relative;
            width:15rem;
            heigth:22rem !important;
            margin:10px;
            cursor:pointer;
          }

          .card:hover {
            box-shadow:1px 1px 20px gray;
          }

          .card:hover .name {
            color:blue;
            text-transform: uppercase;
            text-decoration: underline;
            text-decoration-color: red;
          }

          .img {
            position:relative;
            margin:0 auto;
          }

          
        `}</style>    

   </>       
  )
}

export default about