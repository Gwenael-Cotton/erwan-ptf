import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erwan Cotton - Portfolio</title>
        <meta name="description" content="developed by Gwenaël Cotton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Erwan Cotton</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
      <main className={styles.main}>
        <div>
          <h1>Hello</h1>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
