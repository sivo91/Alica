
import { getAllIds, getData } from '../lib/data';
import Link from 'next/link'
import Image from 'next/image'

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
          <Image src={itemData.img}
                     height={200}  width={100}
                     alt="img" />
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


          <div className='relatedOutput'>
            {
              itemData.related ? 
                itemData.related.map(({id, img}) => {
                return (
                  
                  <Link className='cardRelated' key={id}   href={`/${id}`}>
                     <Image src={img}
                        height={20}  width={100}
                        alt="img"/> 
                     </Link>
                   
                )}
                ) : null
            }
          </div>

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

         .relatedOutput {
          position:relative;
          width:100%;
          height:100px;
          display:flex;
          margin-top:20px;
          flex-wrap:wrap;
          justify-content:space-evenly;
          cursor:pointer;
         }
          
        `}</style>
      
  </>
  );
}