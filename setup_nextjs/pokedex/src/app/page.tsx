import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1><span>Poke</span><span>Next</span></h1>
        <button>About</button>
      </header>
    </main>
  )
}
