import Image from 'next/image'
import styles from '../styles/Home.module.css'
import APIcall from '../pages/apicall'

export default function Blank() {
	const callAPI = async () => {
		console.log(test);
	};
  return (
    <div className={styles.container}>

      <main className={styles.main2}>
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
      </main>

      <footer className={styles.footer}>
        <a
          href="https://onodeloc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by onodeloc.com
        </a>
      </footer>
    </div>
  )
}
