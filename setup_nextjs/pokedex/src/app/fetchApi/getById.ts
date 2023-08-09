const getById = async (id: string | number) => {
  try {
    const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    return { name: 'error' }
  }
}

export default getById;