import PokeCard from "@/app/components/pokeCard";

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string
    url: string
  }[];
}

async function getData() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data: PokemonListResponse = await res.json();
    return data.results
  } catch (error) {
    return [{name: 'error', url: 'error'}]
  }
}

async function Pokedex() {
  const pokemons = await getData();
  return (
    <main>
      {pokemons?.map((pokemon) => (
        <PokeCard key={pokemon.name} url={pokemon.url} />
      ))}
    </main>
  );
}

export default Pokedex;
