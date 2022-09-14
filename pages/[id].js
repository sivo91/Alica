
import { getAllIds, getData } from '../lib/data';
import Link from 'next/link'

// dava id a vytvara novu page
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths, // represent id
    fallback: false
  };
}


 // vytahuje data 
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

// data novej stranke
export default function Entry({ itemData }) {
  
  return (
    <>

     <div className="box">
       
         <div className="card vstack mx-auto mt-5">
            <div className="card-body">
              <h3 className="card-text text-center">{itemData.title}</h3>
              <p className="text-center"> {itemData.gender}</p>
              <p className="text-center">Age: {itemData.age}</p>
              <p className="text-center">Born: {itemData.born}</p>
            </div>
          </div>

       
       {
         // link na domovsku stranky
         <Link href="/about">
           <button type="button" className="btn btn-outline-warning vstack mx-auto">Back Home</button>
          </Link>
       }

     </div>
        
       <style jsx>{`

        .box{
          position:relative;
          width:100%;
          height:250px;
        }
         
          .card {
            position:relative;
            width:15rem;
            heigth:22rem !important;
            margin:10px;
            
            background-color:yellow;
          }

         .btn {
           color:black;
           
         }

          
        `}</style>
      
  </>
  );
}