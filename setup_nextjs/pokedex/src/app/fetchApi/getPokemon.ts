const getPokemon = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);

    return data
  } catch (error) {
    return { name: 'error' }
  }
}

export default getPokemon;