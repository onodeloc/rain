import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Blank from '../pages/blank.tsx'
import APIcall from '../pages/apicall.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will it rain?</title>
        <meta name="description" content="A weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blank/>
    
    </div>
  )
}
