import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Entry from './[id]'
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
    
       <h1 className='text-center'>home page</h1>
       
       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          
      

    </div>
  )
}
