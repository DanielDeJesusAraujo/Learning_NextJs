'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import getPokemon from '@/app/fetchApi/getPokemon'
import IPokemon from '@/app/interfaces/IPokemon'

function PokeCard({ url }: { url: string }) {
  const [pokemon, setpokemon] = useState<IPokemon>()
  const router = useRouter()

  useEffect(() => {
    const get = async () => {
      const res = await getPokemon(url)
      setpokemon(res)
    }
    get()
  }, [url])



  if (pokemon !== undefined) {
    return (
      <section
        onClick={() => {
          router.push(`/details/${pokemon.id}`)
        }}
        className={styles.card + ' ' + styles[pokemon.types[0].type.name]}
      >
        <p className={styles.name}>{pokemon.name}</p>
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width={160}
          height={100}
        />
        <div>
          <p className={styles.height}>Height: {pokemon.height}</p>
          <p className={styles.weight}>Weight: {pokemon.weight}</p>
        </div>
      </section>
    )
  }
}

export default PokeCard