import { PokemonListResponse } from "../interfaces/IPokemon";

const getNext = async (url: string) => {
  const res = await fetch(url);
  const data: PokemonListResponse = await res.json();
  return data;
}

export default getNext;