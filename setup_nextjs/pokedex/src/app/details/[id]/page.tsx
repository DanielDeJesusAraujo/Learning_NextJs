'use client'
import React, { useContext, useEffect, useState } from 'react'
import getById from '@/app/fetchApi/getById'
import IPokemon, { IBaseStats } from '@/app/interfaces/IPokemon'
import Image from 'next/image'
import styles from './page.module.css'
import Chart, { IData } from '@/components/chart'
import Link from 'next/link'

function Details({ params }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState<IPokemon>()
  const [data, setData] = useState<IData[]>()

  useEffect(() => {    
    const colorsDegraded = [
      'rgb(238, 255, 0)',
      'rgb(255, 187, 0)',
      'rgb(255, 174, 0)',
      'rgb(255, 123, 0)',
      'rgb(255, 51, 0)',
      'rgb(255, 0, 0)',

    ]
    const id = params.id
    const get = async () => {
      if (typeof id === 'string' || typeof id === 'number') {
        const res = await getById(id)
        setPokemon(res)
        const dataFormat = res.stats.map((stat: IBaseStats, index: number) => {
          return {
            name: stat.stat.name,
            uv: stat.base_stat,
            pv: stat.base_stat,
            fill: colorsDegraded[index],
          }
        })
        setData(dataFormat)
      }
    }
    get()
  }, [params.id])

  if (pokemon?.name) {
    return (
      <section className={styles.details + ' ' + styles[pokemon.types[0].type.name] || styles.normal}>
        <section className={styles.container}>
          <section className={styles.image}>
            <h2>{pokemon.name}</h2>
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width={300}
              height={300}
            />
            <section className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/about">about</Link>
            </section>
          </section>
          <section className={styles.types}>
            <h2>Types</h2>
            <ul>
              {pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </section>
          <section className={styles.stats}>
            <h2>Stats</h2>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
              ))}
            </ul>
            {
              data && (
                <section className={styles.chart}>
                  <Chart data={data} />
                </section>
              )
            }
          </section>
        </section>
      </section>
    )
  }
}

export default Details