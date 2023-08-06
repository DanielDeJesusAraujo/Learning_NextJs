import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

async function PokeCard({url}: {url: string}) {
  const getPokemon = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      return data
    } catch (error) {
      return {name: 'error'}
    }
  }

  const pokemon = await getPokemon()
  if (!!pokemon) {
    return (
    <main  style={{backgroundImage: `url(${pokemon.sprites.front_default})`}} className={styles.card}>
      <p>{pokemon.name}</p>
      
    </main>
    )
  }
}

export default PokeCard