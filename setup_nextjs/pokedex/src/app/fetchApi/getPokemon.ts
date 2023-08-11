const getPokemon = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()

    return data
  } catch (error) {
    return { name: 'error' }
  }
}

export default getPokemon;