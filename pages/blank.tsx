import Image from 'next/image'
import styles from '../styles/Home.module.css'
import APIcall from '../pages/apicall'

export default function Blank() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Will it <a href="../">Rain?</a>
        </h1>
        <br></br>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}

        <div className={styles.grid}>
          <a href="../api/weather" className={styles.card}>
            <h2>Weather &rarr;</h2>
            <p>Find out more information about your local weather!</p>
          </a>

          <a href="https://onodeloc.com" className={styles.card}>
            <h2>About us &rarr;</h2>
            <p>Learn more about how this application was created!</p>
          </a>
          
        </div>
        <APIcall/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://onodeloc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by onodeloc.com{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
