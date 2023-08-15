'use client'
import { useEffect, useState } from "react";
import PokeCard from "../../components/pokeCard";
import styles from './page.module.css';
import { PokemonListResponse } from "@/app/interfaces/IPokemon";
import getNext from "@/app/utils/getNext";





function Pokedex() {
  const [pokemonsList, setPokemonsList] = useState<PokemonListResponse['results']>([])
  const [nextPage, setNextPage] = useState<string | null>('')

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=48');
        const data: PokemonListResponse = await res.json();
        setPokemonsList(data.results);
        setNextPage(data.next);
      } catch (error) {
        return [{name: 'error', url: 'error'}]
      }
    }
    getData();
  }, []);

  const handleMore = async () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight && nextPage !== null) {
      const next = await getNext(nextPage);
      setPokemonsList((prev) => prev.concat(next.results));
      setNextPage(next.next);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleMore);
    return () => {
      window.removeEventListener('scroll', handleMore);
    }
  })

  return (
    <section>
      <section className={styles.main_pokedex}>
        {pokemonsList?.map((pokemon) => (
          <PokeCard key={pokemon.name} url={pokemon.url} />
        ))}
      </section>
    </section>
  );
}

export default Pokedex;
