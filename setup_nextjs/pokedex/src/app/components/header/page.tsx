import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Header() {
  return (
    <main className={styles.main_header}>
      <header className={styles.header}>
        <h1>Poke<span className={styles.next}>Next</span></h1>
        <nav>
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="/about">about</Link>
          <Link className={styles.link} href="/search">search</Link>
        </nav>
      </header>
    </main>
  )
}

export default Header