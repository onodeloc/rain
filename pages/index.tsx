import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Blank from '../pages/blank.tsx'
import APIcall from '../pages/apicall.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <title>Will it Rain?</title>
          <meta name="description" content="A weather application" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <APIcall />
      <Blank />

    </div>
  )
}
